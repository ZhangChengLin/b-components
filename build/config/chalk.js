'use strict'

const chalk = require('chalk')

const customChalk = new chalk.Instance({
  level: 3
})

const {log, info, error, warn} = console

const orange = '#FFA500'

const errorLog = error
const infoLog = info
const warnLog = warn

const logBgError = customChalk.bgRed.bold.black
const logBgSuccess = customChalk.bgGreen.bold.black
const logBgWarn = customChalk.bgHex(orange).bold.black

const logSuccess = customChalk.bold.green
const logError = customChalk.bold.red
const logWarn = customChalk.hex(orange) // Orange color

module.exports = {
  log,
  infoLog,
  errorLog,
  warnLog,
  logBgSuccess,
  logBgError,
  logBgWarn,
  logSuccess,
  logError,
  logWarn
}
