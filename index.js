var path = require('path');

module.exports = function(opts) {
  return function(style) {
    style.import(path.join(__dirname + '/gridus.styl'));
  };
};
