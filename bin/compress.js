const fs = require('fs')
const glob = require('glob')
const zlib = require('zlib')
const pipe = require('util').promisify(require('stream').pipeline)

const isCompressed = /\.(gz|br)$/

function doGzip (file) {
  if (isCompressed.test(file)) return
  const source = fs.createReadStream(file)
  const destination = fs.createWriteStream(`${file}.gz`)
  return pipe(source, zlib.createGzip({
    level: 9
  }), destination)
}

function doBrotli (file) {
  if (isCompressed.test(file)) return
  const source = fs.createReadStream(file)
  const destination = fs.createWriteStream(`${file}.br`)
  return pipe(source, zlib.createBrotliCompress({
    params: {
      [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
      [zlib.constants.BROTLI_PARAM_QUALITY]: zlib.constants.BROTLI_MAX_QUALITY
    }
  }), destination)
}

const files = glob.sync('./public/**/*', {nodir: true, absolute: true})
console.log(`Run compression on ${files.length} files`)
Promise.all([
  Promise.all(files.map(doGzip)),
  Promise.all(files.map(doBrotli))
]).then(() => console.log(`Compressed`))
