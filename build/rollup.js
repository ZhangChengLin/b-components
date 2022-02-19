'use strict'

const {rollup, watch} = require('rollup')
const {terser} = require('rollup-plugin-terser')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const del = require('rollup-plugin-delete')
const cleanup = require('rollup-plugin-cleanup')


const {log, logBgError, logBgSuccess} = require('./config/chalk')
const {Banner, BannerMin} = require('./config/banner')
const paths = require('./config/paths')


const PREFIX = 'b'
const toUpperCase = (str) => str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
const terserOptions = {}
const nodeResolveOptions = {}
const cleanupOptions = {}


const MinifyStatus = [true, false]
const OutputFormat = ['esm', 'umd']
const Components = ['components', 'modal', 'offcanvas', 'toast']

function inputOptions(dirname, format) {
  return {
    input: paths.src + `${dirname}/index.${format}.js`,
    plugins: [
      del({
        targets: 'dist',
        hook: 'buildStart'
      }),
      nodeResolve(nodeResolveOptions),
      cleanup(cleanupOptions)
    ],
    external: ['bootstrap']
  }
}

function outputOptions(filename, format = '', min = false, sourcemap = true) {
  format = format === 'umd'
    ? ''
    : ['es', 'esm', 'module'].includes(format)
      ? 'esm'
      : ['cjs', 'commonjs'].includes(format)
        ? 'cjs'
        : ['system', 'systemjs'].includes(format)
          ? 'system'
          : format

  return {
    name: `${PREFIX}${toUpperCase(filename)}`,
    banner: min ? BannerMin : Banner,
    format: format ? format : 'umd',
    file: paths.dist + `${PREFIX}${toUpperCase(filename)}${format ? '.' + format : ''}${min ? '.min' : ''}.js`,
    plugins: [
      min ? terser(terserOptions) : ''
    ],
    generatedCode: 'es2015',
    globals: {
      'bootstrap': 'bootstrap'
    },
    sourcemap: sourcemap
  }
}

buildList()

function buildList() {
  MinifyStatus.forEach(currentMinify => {
    OutputFormat.forEach(currentFormat => {
      Components.forEach(currentName => {
        const x = `${PREFIX}${toUpperCase(currentName)}${currentFormat === 'umd' ? '' : '.' + currentFormat}${currentMinify ? '.min' : ''}.js`

        build(inputOptions(currentName, currentFormat), outputOptions(currentName, currentFormat, currentMinify))
          .then(() => {
            log(logBgSuccess(` OK ${x} `))
          })
          .catch(error => {
            log(logBgError(` Fail ${x} `))
            log(logBgError(error))
          })
      })
    })
  })
}

async function build(inputOpts, outputOpts) {
  let bundle

  try {
    bundle = await rollup(inputOpts)
  } catch (error) {
    log(logBgError(error))
  }

  await bundle.write(outputOpts)

  if (bundle) {
    await bundle.close()
  }
}

const watchOptions = {}
const watcher = watch(watchOptions)

jsWatcher()

function jsWatcher() {
  watcher.close()
}
