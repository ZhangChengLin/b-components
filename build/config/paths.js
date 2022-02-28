'use strict'

const path = require('path')

const root = path.resolve(__dirname, '../../') + '/'
const nodeModules = root + 'node_modules/'
const src = root + 'src/'
const docs = root + 'docs/'
const dist = root + 'dist/'
const cache = root + '.cache/'

const paths = {
  root: root,
  nodeModules: nodeModules,
  src: src,
  docs: docs,
  dist: dist,
  cache: cache
}

module.exports = { paths }
