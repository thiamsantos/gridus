var path = require('path')
var pkg = require('./package.json')

var gridusPath = path.join(__dirname, '/gridus.styl')

exports = module.exports = function (opts) {
  var implicit = (opts && opts.implicit == false) ? false : true;

  return function (style) {
    style.include(__dirname);

    if (implicit) {
      style.import(gridusPath);
    }
  }
}

exports.libname = pkg.name
exports.path = gridusPath
exports.version = pkg.version
