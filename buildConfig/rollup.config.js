'use strict'

const {nodeResolve} = require('@rollup/plugin-node-resolve')
const {terser} = require('rollup-plugin-terser')
const cleanup = require('rollup-plugin-cleanup')
const {Banner, BannerMin} = require('./banner')
const paths = require('./paths')

const PREFIX = 'b'
const ESM = process.env.ESM === 'true'
const {BsNAME} = process.env

const terserOptions = {}
const nodeResolveOptions = {}

const toUpperCase = (str) => str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())

const inputOptions = [paths.src + `${BsNAME}/index.${ESM ? 'esm' : 'umd'}.js`]
const outputOptions = [
  {
    banner: Banner,
    file: paths.dist + `${PREFIX}${toUpperCase(BsNAME)}${ESM ? '.esm' : ''}.js`,
    format: `${ESM ? 'esm' : 'umd'}`,
    generatedCode: 'es2015',
    globals: {
      'bootstrap': 'bootstrap'
    },
    plugins: [],
    sourcemap: true
  },
  {
    banner: BannerMin,
    file: paths.dist + `${PREFIX}${toUpperCase(BsNAME)}${ESM ? '.esm' : ''}.min.js`,
    format: `${ESM ? 'esm' : 'umd'}`,
    generatedCode: 'es2015',
    globals: {
      'bootstrap': 'bootstrap'
    },
    plugins: [
      terser(terserOptions),
    ],
    sourcemap: true
  },
]

const rollupConfig = {
  external: ['bootstrap'],
  plugins: [nodeResolve(nodeResolveOptions), cleanup()],
  input: inputOptions,
  output: outputOptions
}

if (!ESM) {
  rollupConfig.output.forEach(currentOutput => {
    currentOutput.name = `${PREFIX}${toUpperCase(BsNAME)}`
  })
}

module.exports = rollupConfig
