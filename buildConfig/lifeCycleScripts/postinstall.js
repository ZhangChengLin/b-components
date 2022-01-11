'use strict'

const open = require('open')

const urls = [
  'https://ZhangChengLin.github.io/b-components?form=npm_postinstall',
  'https://ZhangChengLin.github.io/b-components/docs/index.html?form=npm_postinstall'
]

/**
 *
 * @param {string} url
 */
const openUrl = async (url) => {
  await open(url).then(() => console.log('open ok', url))
}

/**
 * @param {string[]} urls
 */
const openUrls = (urls) => {
  urls.forEach(currentURL => openUrl(currentURL))
  return true
}

module.exports = openUrls(urls)
