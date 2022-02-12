'use strict'

const chalk = require('chalk')
const {log} = require('console')

const orange = '#FFA500'

const logBgError = chalk.bgRed.bold.black
const logBgSuccess = chalk.bgGreen.bold.black
const logBgWarn = chalk.bgHex(orange).bold.black

const logSuccess = chalk.bold.green
const logError = chalk.bold.red
const logWarn = chalk.hex(orange) // Orange color

module.exports = {
  log,
  logBgSuccess,
  logBgError,
  logBgWarn,
  logSuccess,
  logError,
  logWarn,
}
