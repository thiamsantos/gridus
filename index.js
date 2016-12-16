var path = require('path')
var pkg = require('./package.json')

exports = module.exports = function (opts) {
  return function (style) {
    style.include(__dirname)
  }
}

exports.libname = pkg.name
exports.version = pkg.version
