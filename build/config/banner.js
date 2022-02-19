'use strict'

const pkg = require('../../package.json')
const year = new Date().getFullYear()

const Banner = () =>
  `/*!
 * Name: ${pkg.name}
 * Version: ${pkg.version}
 * Description: ${pkg.description}
 * Copyright (c) 2020 - ${year} ${pkg.author.name}
 * Licenses: ${pkg.license}
 * GitHub: ${pkg.github}
*/`

const BannerMin = () =>
  `/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.github}
 * Copyright (c) 2020 - ${year} ${pkg.license}
*/`

module.exports = {Banner, BannerMin}
