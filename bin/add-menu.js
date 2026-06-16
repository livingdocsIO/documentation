#!/usr/bin/env node
import fs from 'fs'
import {globSync} from 'glob'

const files = globSync('**/*.md', {
  nodir: true,
  absolute: true
})

const menu = process.argv.slice(2)[0]
if (!menu) throw new Error('A menu parameter is required')

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8').trim().split('\n')
  if (content[0].includes('---')) continue

  let title = ''
  if (content[0].startsWith('#')) {
    title = content.shift().replace(/^[# ]+/, '')
  }

  content.unshift('---')
  if (title) content.unshift(`title: ${title}`)
  content.unshift(`menu: ${menu}`)
  content.unshift('---')

  fs.writeFileSync(file, `${content.join('\n')}\n`)
  console.log(`Update ${file}`)
}
