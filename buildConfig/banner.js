'use strict'

const pkg = require('../package.json')
const year = new Date().getFullYear()

const Banner = () =>
  `/*!
 * Name: ${pkg.name}
 * Version: ${pkg.version}
 * Author: ${pkg.author.name}
 * Email: ${pkg.author.email}
 * Description: ${pkg.description}
 * Copyright (c) 2020 - ${year} ${pkg.author.name}
 * Licenses: ${pkg.license}
 * under the MIT License (license terms are at https://opensource.org/licenses/MIT).
 * GitHub: ${pkg.github}
*/`

module.exports = Banner
