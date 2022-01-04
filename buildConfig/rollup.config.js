'use strict'

import {terser} from "rollup-plugin-terser";
import {default as banner} from "./banner.js";

const paths = require('./paths')

const PREFIX = 'b'
const ESM = process.env.ESM === 'true'
const BsNAME = process.env.BsNAME

const toUpperCase = (str) => {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

const inputOptions = [paths.src + `${BsNAME}/index.${ESM ? 'esm' : 'umd'}.js`]
const outputOptions = [
  {
    banner,
    file: paths.dist + `${ESM ? 'esm/' : 'umd/'}` + `${PREFIX}${toUpperCase(BsNAME)}.js`,
    format: `${ESM ? 'esm' : 'umd'}`,
    generatedCode: 'es2015',
    plugins: [],
    sourcemap: true
  },
  {
    banner,
    file: paths.dist + `${ESM ? 'esm/' : 'umd/'}` + `${PREFIX}${toUpperCase(BsNAME)}.min.js`,
    format: `${ESM ? 'esm' : 'umd'}`,
    generatedCode: 'es2015',
    plugins: [terser()],
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
