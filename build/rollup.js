'use strict'

const {rollup, watch, RollupWatcher} = require('rollup')
const {terser} = require('rollup-plugin-terser')
const {nodeResolve} = require('@rollup/plugin-node-resolve')
const del = require('rollup-plugin-delete')
const cleanup = require('rollup-plugin-cleanup')

const {NODE_ENV} = process.env

const {log, errorLog, infoLog, logBgError, logBgSuccess} = require('./config/chalk')
const {Banner, BannerMin} = require('./config/banner')
const {paths} = require('./config/paths')


const PREFIX = 'b'
const toUpperCase = (str) => str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
const terserOptions = {}
const nodeResolveOptions = {}
const cleanupOptions = {}


const MinifyStatus = [true, false]
const OutputFormat = ['esm', 'umd']
const ComponentNames = ['modal', 'offcanvas', 'toast', 'bundle']
const external = ['bootstrap']

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
    external
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

  const Opts = {
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
  if (filename === 'bundle') {
    Opts.name = ''
    Opts.file = paths.dist + `${PREFIX}.${filename}${format ? '.' + format : ''}${min ? '.min' : ''}.js`
  }

  return Opts
}

buildList()

function buildList() {
  NODE_ENV === 'development'
    ? log(logBgSuccess(' 开发模式 '))
    : log(logBgSuccess(' 生产模式 '))

  MinifyStatus.forEach(currentMinify => {
    OutputFormat.forEach(currentFormat => {
      ComponentNames.forEach(currentName => {
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
  let watcher

  try {
    bundle = await rollup(inputOpts)
  } catch (error) {
    errorLog(logBgError('rollup errorLog: '), error)
  }


  NODE_ENV === 'development'
    ? await (async () => {
      try {
        watcher = await watch({
          input: inputOpts,
          output: outputOpts,
          watch: bundle.watchFiles,
          external: external
        })
        watcherTips(watcher)
      } catch (error) {
        errorLog(logBgError('watch errorLog: '), error)
      }
    })()
    : ''

  await bundle.write(outputOpts)

  if (bundle) {
    await bundle.close()
  }
}

/**
 * @param {RollupWatcher} watcher
 */
function watcherTips(watcher = RollupWatcher) {

  watcher.on('event', event => {
    switch (event.code) {
      case 'START':// START — 监听器正在启动（重启）
        infoLog('Rebuilding...')
        break
      case 'BUNDLE_START':// BUNDLE_START — 构建单个文件束
        infoLog('Bundling...')
        break
      case 'BUNDLE_END':// BUNDLE_END — 完成文件束构建
        infoLog('Bundled!')
        break
      case 'END':// END — 完成所有文件束构建
        infoLog('Done!')
        break
      case 'ERROR':// ERROR — 构建时遇到错误
        // errorLog(logBgError('Rollup error: '), event)
        break
      default:
        log(logBgError(event.code))
        log(logBgError('157'))
    }
  })

// 停止监听
//   watcher.close()
}
