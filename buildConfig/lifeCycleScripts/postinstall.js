'use strict'

const open = require('open')

const openDemo = async () => {
  await open('https://ZhangChengLin.github.io/b-components/docs/index.html?form=npm_postinstall')

  console.log('ok')
}

module.exports = openDemo()
