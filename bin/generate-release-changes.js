#!/usr/bin/env node
const fs = require('fs')
const {parseArgs} = require('util')

const MAX_RETRIES = 5
const RETRY_DELAY = 1000
const CONCURRENT_REQUESTS = 50

function printHelp() {
  console.log(`Usage: node bin/generate-release-changes.js [options] <markdown-file>

Options:
  -f, --format <format>  Output format: json or markdown (default: json)
  -h, --help            Show help

Example:
  node bin/generate-release-changes.js release-2025-07.md
  node bin/generate-release-changes.js --format=markdown release-2025-07.md
`)
}

function extractPullRequests(file) {
  let content
  try {
    content = fs.readFileSync(file, 'utf8')
  } catch (error) {
    console.error(`Error reading file: ${error.message}`)
    process.exit(1)
  }

  const prUrlRegex = /https:\/\/github\.com\/([^\/]+\/[^\/]+)\/pull(?:s)?\/(\d+)/g
  const matches = [...content.matchAll(prUrlRegex)]

  if (matches.length === 0) {
    console.error('No pull request URLs found in the markdown file')
    process.exit(1)
  }

  const prInfoMap = new Map()
  matches.forEach((match) => {
    const [fullUrl, repo, prNumber] = match
    const key = `${repo}#${prNumber}`
    if (!prInfoMap.has(key)) {
      prInfoMap.set(key, {
        repository: repo,
        url: fullUrl,
        prNumber: prNumber
      })
    }
  })

  return Array.from(prInfoMap.values())
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function githubApiRequest(path, retries = MAX_RETRIES) {
  const headers = {
    'User-Agent': 'changelog-generator',
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
  }

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(`https://api.github.com${path}`, {headers})

      if (response.status === 403 || response.status === 429) {
        await response.text()
        const rateLimitReset = response.headers.get('x-ratelimit-reset')
        const retryAfter = response.headers.get('retry-after')

        let waitTime = RETRY_DELAY * Math.pow(2, attempt)
        if (rateLimitReset) {
          const resetTime = parseInt(rateLimitReset) * 1000
          waitTime = Math.max(waitTime, resetTime - Date.now() + 1000)
        }

        if (retryAfter) {
          waitTime = parseInt(retryAfter) * 1000
        }

        if (attempt < retries) {
          console.error(`Rate limited. Waiting ${Math.ceil(waitTime / 1000)}s before retry...`)
          await sleep(waitTime)
          continue
        }
      }

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`GitHub API error: ${response.status} - ${errorText}`)
      }

      return await response.json()
    } catch (error) {
      if (attempt === retries) throw error

      const waitTime = RETRY_DELAY * Math.pow(2, attempt)
      console.error(`Request failed (attempt ${attempt + 1}/${retries + 1}): ${error.message}`)
      console.error(`Retrying in ${waitTime}ms...`)
      await sleep(waitTime)
    }
  }
}

async function fetchPRData(prInfo) {
  try {
    const pulls = `/repos/${prInfo.repository}/pulls`
    const [prData, commitsData] = await Promise.all([
      githubApiRequest(`${pulls}/${prInfo.prNumber}`),
      githubApiRequest(`${pulls}/${prInfo.prNumber}/commits`)
    ])

    // Extract commit info
    const commits = commitsData.map((commit) => ({
      sha: commit.sha,
      message: commit.commit.message
    }))

    return {
      repository: prInfo.repository,
      url: prInfo.url,
      title: prData.title,
      description: prData.body || '',
      labels: prData.labels.map((label) => label.name),
      commits: commits
    }
  } catch (error) {
    console.error(`Error fetching PR ${prInfo.url}: ${error.message}`)
    return null
  }
}

async function processInBatches(items, batchSize, processor) {
  const results = []

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize)
    const batchResults = await Promise.allSettled(batch.map((item) => processor(item)))

    // Collect successful results
    batchResults.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value) {
        results.push(result.value)
      } else if (result.status === 'rejected') {
        console.error(
          `Failed to process ${batch[index].repository}#${batch[index].prNumber}: ${result.reason}`
        )
      }
    })

    const processed = Math.min(i + batchSize, items.length)
    console.error(`Processed ${processed}/${items.length} pull requests...`)
  }

  results.sort((a, b) => {
    if (a.repository !== b.repository) return a.repository.localeCompare(b.repository)
    const prNumberA = parseInt(a.url.match(/\/(\d+)$/)[1])
    const prNumberB = parseInt(b.url.match(/\/(\d+)$/)[1])
    return prNumberA - prNumberB
  })

  return results.filter((result) => {
    return !result.labels.some((label) => label.toLowerCase().includes('dependencies'))
  })
}

function formatAsMarkdown(results) {
  if (results.length === 0) {
    return '# Changelog\n\nNo pull requests found.'
  }

  let markdown = '# Changelog\n\n'

  const byRepo = {}
  results.forEach((pr) => {
    if (!byRepo[pr.repository]) {
      byRepo[pr.repository] = []
    }
    byRepo[pr.repository].push(pr)
  })

  Object.keys(byRepo)
    .sort()
    .forEach((repo) => {
      markdown += `## ${repo}\n\n`

      byRepo[repo].forEach((pr) => {
        markdown += `### [${pr.title}](${pr.url})\n\n`

        if (pr.labels.length > 0) {
          markdown += `**Labels:** ${pr.labels.map((l) => `\`${l}\``).join(', ')}\n\n`
        }

        if (pr.description.trim()) {
          // Adjust heading levels in description to maintain hierarchy
          let adjustedDescription = pr.description
            .trim()
            .replace(/^#{6} /gm, '###### ') // h6 stays h6
            .replace(/^#{5} /gm, '###### ') // h5 becomes h6
            .replace(/^#{4} /gm, '###### ') // h4 becomes h6
            .replace(/^#{3} /gm, '##### ') // h3 becomes h5
            .replace(/^#{2} /gm, '#### ') // h2 becomes h4
            .replace(/^#{1} /gm, '#### ') // h1 becomes h4

          markdown += `${adjustedDescription}\n\n`
        }

        if (pr.commits.length > 0) {
          markdown += `**Commits:**\n`
          pr.commits.forEach((commit) => {
            const firstLine = commit.message.split('\n')[0]
            markdown += `- \`${commit.sha.substring(0, 7)}\` ${firstLine}\n`
          })
          markdown += '\n'
        }
      })
    })

  return markdown.trim()
}

;(async () => {
  const options = {
    format: {
      type: 'string',
      short: 'f',
      default: 'json',
      description: 'Output format: json or markdown'
    },
    help: {
      type: 'boolean',
      short: 'h',
      description: 'Show help'
    }
  }

  let args
  try {
    args = parseArgs({
      options,
      allowPositionals: true
    })
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }

  if (args.values.help || args.positionals.length === 0) {
    printHelp()
    process.exit(0)
  }

  const markdownFile = args.positionals[0]
  const outputFormat = args.values.format.toLowerCase()

  if (!process.env.GITHUB_TOKEN) {
    console.error('Error: GITHUB_TOKEN environment variable is not set')
    process.exit(1)
  }

  if (!['json', 'markdown'].includes(outputFormat)) {
    console.error('Error: Format must be either "json" or "markdown"')
    process.exit(1)
  }

  const prInfos = extractPullRequests(markdownFile)
  console.error(`Found ${prInfos.length} pull requests to process...`)
  console.error(`Processing in parallel with ${CONCURRENT_REQUESTS} concurrent requests...\n`)
  const results = await processInBatches(prInfos, CONCURRENT_REQUESTS, fetchPRData)

  if (outputFormat === 'markdown') {
    console.log(formatAsMarkdown(results))
  } else {
    console.log(JSON.stringify(results, null, 2))
  }

  console.error(`\nProcessed ${results.length} pull requests successfully`)
  if (!process.env.GITHUB_TOKEN) {
    console.error('\nNote: Set GITHUB_TOKEN environment variable to increase API rate limits')
  }
})()
