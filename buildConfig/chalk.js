const chalk = require('chalk')

// eslint-disable-next-line no-console
const log = console.log

const logBgRed = chalk.bgRed.bold.black
const logBgGreen = chalk.bgGreen.bold.black
const logBgYellowBright = chalk.bgYellowBright.bold.black
const logBgOrange = chalk.bgHex('#FFA500').bold.black

const logSuccess = chalk.bold.green
const logError = chalk.bold.red
const logWarn = chalk.hex('#FFA500') // Orange color

module.exports = {
    log,
    logBgRed,
    logBgGreen,
    logBgYellowBright,
    logBgOrange,
    logSuccess,
    logError,
    logWarn,
}
