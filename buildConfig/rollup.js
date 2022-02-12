'use strict'

// import {rollup, watch, defineConfig} from "rollup";
// import {minify} from "html-minifier-terser";
// import {terser} from "rollup-plugin-terser";
const {rollup, watch, defineConfig} = require('rollup')
const {terser} = require('rollup-plugin-terser')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const del = require('rollup-plugin-delete')
const filesize = require('rollup-plugin-filesize')
const cleanup = require('rollup-plugin-cleanup')


const {log, logSuccess, logError, logWarn, logBgRed, logBgGreen, logBgYellowBright, logBgOrange} = require('./chalk')
const {Banner, BannerMin} = require('./banner')
const paths = require('./paths')


const PREFIX = 'b'
const toUpperCase = (str) => str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
const terserOptions = {}
const nodeResolveOptions = {}
const cleanupOptions = {}
const filesizeOptions = {
  showBrotliSize: true
}

const minifyStatus = [true, false]
const OutputFormat = ['esm', 'umd',]
const Components = ['components', 'modal', 'offcanvas', 'toast',]

function inputOptions(dirname) {
  return {
    input: `src/${dirname}/index.esm.js`, plugins: [del({
      targets: 'dist', hook: 'buildStart'
    }), nodeResolve(nodeResolveOptions), cleanup(cleanupOptions),], external: ['bootstrap']
  }
}

function outputOptions(filename, format = '', min = false, sourcemap = true) {
  format = format === 'umd' ? '' : format === ('es' || 'esm' || 'module') ? 'esm' : format === ('cjs' || 'commonjs') ? 'cjs' : format === ('system' || 'systemjs') ? 'system' : format

  return {
    name: `${PREFIX}${toUpperCase(filename)}`,
    banner: min ? BannerMin : Banner,
    format: format ? format : 'umd',
    file: paths.dist + `${PREFIX}${toUpperCase(filename)}${format ? '.' + format : ''}${min ? '.min' : ''}.js`,
    plugins: [min ? terser(terserOptions) : '', // filesize(filesizeOptions),
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
  OutputFormat.forEach(currentFormat => {
    Components.forEach(currentName => {
      build(inputOptions(currentName), outputOptions(currentName, currentFormat, true))
        .then(() => log(logBgGreen(`\n OK ${PREFIX}${toUpperCase(currentName)} `)))
        .catch(error => log(logError(error)))
    })
  })
}


async function build(inputOpts, outputOpts) {
  // if (outputOpts['format'] === 'umd') {
  //   outputOpts['name'] = `${PREFIX}${toUpperCase(filename)}`
  // }

  // 创建一个捆绑包
  const bundle = await rollup(inputOpts)

  // log(bundle)
  // log(bundle.watchFiles)

  // 生成代码和源图
  const {code, map} = await bundle.generate(outputOpts)

  // 或将捆绑包写入磁盘
  await bundle.write(outputOpts)

  if (bundle) {
    // closes the bundle
    await bundle.close()
  }
}

const watchOptions = {}
const watcher = watch(watchOptions)

function jsWatcher() {
  // stop watching
  watcher.close()
}
