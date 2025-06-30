#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

/**
 * Script to generate a unified documentation file from all markdown files used for AI input via MCP
 */

// Configuration
const CONTENT_DIR = './content'
const OUTPUT_FILE = './unified-documentation.md'
const EXCLUDED_FILES = ['_content.gotmpl'] // Files to skip

/**
 * Recursively find all .md files in a directory
 */
function findMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      findMarkdownFiles(filePath, fileList)
    } else if (path.extname(file) === '.md' && !EXCLUDED_FILES.includes(file)) {
      fileList.push(filePath)
    }
  }

  return fileList
}

/**
 * Extract content from markdown file, removing Hugo front matter
 */
function extractContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')

  // Remove Hugo front matter (between --- delimiters)
  const frontMatterRegex = /^---\s*\n[\s\S]*?\n---\s*\n/
  const contentWithoutFrontMatter = content.replace(frontMatterRegex, '')

  return contentWithoutFrontMatter.trim()
}

/**
 * Convert file path to a readable section title
 */
function pathToTitle(filePath) {
  // Remove ./content/ prefix and .md extension
  let title = filePath.replace(/^\.\/content\//, '').replace(/\.md$/, '')

  // Handle _index.md files
  title = title.replace(/_index$/, '')

  // Convert path separators to breadcrumbs and capitalize
  const parts = title.split('/').filter((part) => part.length > 0)

  if (parts.length === 0) {
    return 'Home'
  }

  return parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '))
    .join(' > ')
}

/**
 * Generate a heading level based on directory depth
 */
function getHeadingLevel(filePath) {
  const depth = filePath.split('/').length - 2 // Subtract for './content'
  return Math.min(Math.max(depth, 1), 6) // Clamp between 1 and 6
}

/**
 * Create table of contents entry
 */
function createTocEntry(title, anchor, level) {
  const indent = '  '.repeat(Math.max(level - 1, 0))
  const cleanAnchor = anchor
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
  return `${indent}- [${title}](#${cleanAnchor})`
}

/**
 * Main function to generate unified documentation
 */
function generateUnifiedDocumentation() {
  console.log('🔍 Finding markdown files...')
  const markdownFiles = findMarkdownFiles(CONTENT_DIR)

  // Sort files for logical order (directories first, then alphabetically)
  markdownFiles.sort((a, b) => {
    const aDepth = a.split('/').length
    const bDepth = b.split('/').length

    if (aDepth !== bDepth) {
      return aDepth - bDepth
    }

    return a.localeCompare(b)
  })

  console.log(`📄 Found ${markdownFiles.length} markdown files`)

  let combinedContent = ''
  let tocEntries = []

  // Add header
  combinedContent += '# Livingdocs Unified Documentation\n\n'
  combinedContent += `*Unified documentation generated on ${new Date().toISOString()}*\n\n`
  combinedContent += `*This file contains all documentation from ${markdownFiles.length} markdown files.*\n\n`

  // Add placeholder for TOC
  const tocPlaceholder = '<!-- TOC_PLACEHOLDER -->\n\n'
  combinedContent += tocPlaceholder

  // Process each file
  for (const filePath of markdownFiles) {
    console.log(`📝 Processing: ${filePath}`)

    const title = pathToTitle(filePath)
    const headingLevel = getHeadingLevel(filePath)
    const headingPrefix = '#'.repeat(headingLevel)

    // Add to TOC
    tocEntries.push(createTocEntry(title, title, headingLevel))

    // Add file section
    combinedContent += `${headingPrefix} ${title}\n\n`
    combinedContent += `*Source: \`${filePath}\`*\n\n`

    // Add file content
    const content = extractContent(filePath)
    if (content) {
      combinedContent += content + '\n\n'
    } else {
      combinedContent += '*No content*\n\n'
    }

    combinedContent += '---\n\n' // Section separator
  }

  // Generate TOC
  const toc = '## Table of Contents\n\n' + tocEntries.join('\n') + '\n\n'

  // Replace TOC placeholder
  combinedContent = combinedContent.replace(tocPlaceholder, toc)

  // Write unified documentation file
  console.log(`💾 Writing unified documentation to: ${OUTPUT_FILE}`)
  fs.writeFileSync(OUTPUT_FILE, combinedContent)

  console.log('✅ Unified documentation generation complete!')
  console.log(`📊 Generated from ${markdownFiles.length} files into ${OUTPUT_FILE}`)
  console.log(`📏 Total size: ${Math.round(combinedContent.length / 1024)} KB`)
}

// Run the script
try {
  // Change to the parent directory (documentation root) if running from bin/
  if (process.cwd().endsWith('/bin')) {
    process.chdir('..')
  }
  generateUnifiedDocumentation()
} catch (error) {
  console.error('❌ Error generating unified documentation:', error.message)
  console.error('Stack trace:', error.stack)
  process.exit(1)
}
