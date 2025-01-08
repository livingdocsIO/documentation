'use strict'
const glob = require('glob')
const fs = require('fs/promises')
const fsSync = require('fs')
const path = require('path')
const https = require('https')

const githubImageRegex = /https:\/\/user-images\.githubusercontent\.com\/[^"\)\s]+/g

async function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const fileStream = fsSync.createWriteStream(outputPath)
      response.pipe(fileStream)
      fileStream.on('finish', resolve)
      fileStream.on('error', reject)
    })
  })
}

async function processFiles() {
  const files = glob.sync('content/**/*.md', {cwd: path.resolve(__dirname, '../')})

  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8')
    const matches = content.match(githubImageRegex)
    if (!matches) continue

    const imagePrefix = toImagePrefix(file)
    const imagesDir = imagePrefix.endsWith('/') ? imagePrefix : path.dirname(imagePrefix)
    await fs.mkdir(imagesDir, {recursive: true})

    for (const url of matches) {
      const filename = path.basename(url)
      const imagePath = `${imagePrefix}${filename}`

      await downloadImage(url, imagePath)

      const relativePath = `.${path.relative(file, imagePath).replace('.', '')}`
      const newContent = content.replace(url, relativePath)
      await fs.writeFile(file, newContent)
    }
  }
}

function toImagePrefix (file) {
  const dirName = path.dirname(file)
  const fileName = path.basename(file)

  if (fileName.startsWith('release-')) {
    return file.replace('.md', `-`)
  }

  return path.join(dirName, 'images/')
}

processFiles()
