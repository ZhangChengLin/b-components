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

const dirArr = [
  'components',
  'modal',
  'offcanvas',
  'toast',
]
const inputOptions = {
  input: 'src/components/index.esm.js',
  plugins: [
    del({
      targets: 'dist',
      hook: 'buildStart'
    }),
    nodeResolve(nodeResolveOptions),
    cleanup(cleanupOptions),
  ],
  external: ['bootstrap']
}

const outputOptions = (dirArr) => {
  return {
    name: `${PREFIX}${toUpperCase(dirArr)}`,
    // banner: Banner,
    banner: BannerMin,
    format: 'umd',
    file: paths.dist + `${PREFIX}${toUpperCase(dirArr)}.min.js`,
    // format: 'es',
    // file: paths.dist + `${PREFIX}${toUpperCase(dirArr)}.esm.js`,
    plugins: [
      // terser(terserOptions),
      filesize(filesizeOptions),
    ],
    generatedCode: 'es2015',
    globals: {
      'bootstrap': 'bootstrap'
    },
    sourcemap: true
  }
}

buildList()

function buildList() {
  dirArr.forEach((currentName) => {
    build(inputOptions, outputOptions(currentName))
      .then(() => log(logBgGreen(`\n OK ${PREFIX}${toUpperCase(currentName)} `)))
      .catch(error => log(logError(error)))
  })
}


async function build(inputOpts, outputOpts) {
  // 创建一个捆绑包
  const bundle = await rollup(inputOpts)

  // log(bundle)
  // log(bundle.watchFiles)

  // 生成代码和源图
  const {code, map} = await bundle.generate(outputOpts)

  // 或将捆绑包写入磁盘
  await bundle.write(outputOpts)
}

const watchOptions = {}
const watcher = watch(watchOptions)

function jsWatcher() {
  // stop watching
  watcher.close()
}
