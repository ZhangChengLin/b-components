'use strict'

const {terser} = require('rollup-plugin-terser')
const filesize = require('rollup-plugin-filesize')
const banner = require('./banner')
const paths = require('./paths')

const PREFIX = 'b'
const ESM = process.env.ESM === 'true'
const {BsNAME} = process.env
const filesizeOptions = {
  showBrotliSize: true
}
const terserOptions = {}

const toUpperCase = (str) => str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())

const inputOptions = [paths.src + `${BsNAME}/index.${ESM ? 'esm' : 'umd'}.js`]
const outputOptions = [
  {
    banner,
    file: paths.dist + `${ESM ? 'esm' : 'umd'}/${PREFIX}${toUpperCase(BsNAME)}.js`,
    format: `${ESM ? 'esm' : 'umd'}`,
    generatedCode: 'es2015',
    plugins: [
      filesize(filesizeOptions)
    ],
    sourcemap: true
  },
  {
    banner,
    file: paths.dist + `${ESM ? 'esm' : 'umd'}/${PREFIX}${toUpperCase(BsNAME)}.min.js`,
    format: `${ESM ? 'esm' : 'umd'}`,
    generatedCode: 'es2015',
    plugins: [
      terser(terserOptions),
      filesize(filesizeOptions)
    ],
    sourcemap: true
  },
]

const rollupConfig = {
  input: inputOptions,
  output: outputOptions
}

if (!ESM) {
  rollupConfig.output.forEach(currentOutput => {
    currentOutput.name = `${PREFIX}${toUpperCase(BsNAME)}`
  })
}

module.exports = rollupConfig
