<img src="https://cdn.rawgit.com/thiamsantos/gridus/master/logo-gridus.svg" height="200" align="right">

# gridus
[![Travis](https://img.shields.io/travis/thiamsantos/gridus.svg)](https://travis-ci.org/thiamsantos/gridus)
[![npm (scoped)](https://img.shields.io/npm/v/gridus.svg)](https://www.npmjs.com/package/gridus)
[![npm](https://img.shields.io/npm/l/gridus.svg)](LICENSE.md)
A semantic flexbox grid made with stylus. It provides eight mixins with the higher powers of flexbox.

*Note: Is fully recommended the use of [autoprefixer-stylus](https://github.com/jescalan/autoprefixer-stylus) along with gridus, because it adds all vendor-prefixers necessary to flexbox works on every modern browser.*

## Table of contents
- [Installation](#installation)
  - [Import](#import)
  - [Stylus CLI](#stylus-cli)
  - [Stylus API](#stylus-api)
  - [Gulp](#gulp)
- [Support](#support)
- [Basic Usage](#basic-usage)
- [Mixins](#mixins)
  - [Align](#align)
  - [Cell](#cell)
  - [Column](#column)
  - [Gutter](#gutter)
  - [Justify](#justify)
  - [Offset](#offset)
  - [Row](#row)
- [Contribute](#contribute)
- [License](#license)

## Installation
First of all install the gridus package using [npm](https://www.npmjs.com/).
```bash
npm install gridus
```
Alternatively, you can install gridus with [yarn](https://yarnpkg.com/).
```bash
yarn add gridus
```

### Import
The easiest way to use gridus is by importing the file directly.
```stylus
@import 'node_modules/gridus/gridus'
```

### Stylus CLI
To use gridus with the stylus cli you can use the following command.
```bash
$ stylus src/styl --out dist/css --use gridus
```

### Stylus API
Simply require the stylus module and type.
See the [documentation](http://stylus-lang.com/docs/js.html) for more info.
```javascript
stylus(str)
  .use(gridus)
  .render(...)
```

Alternatively, you can use the render function.
```javascript
stylus.render(str, { use: gridus }, function(err, css) {
  if (err) throw err;
  console.log(css);
});
```

### Gulp
To use gridus with gulp, you can use [gulp-stylus](https://www.npmjs.org/package/gulp-stylus) and include gridus in use option.
``` javascript
const gulp = require('gulp');
const stylus = require('gulp-stylus');
const gridus = require('gridus');

gulp.task('stylus', function() {
  gulp.src('src/styl/*.styl')
    .pipe(stylus({
      use: [gridus()]
    }))
    .pipe(gulp.dest('dist/css'))
})
```

## Support
Gridus has the same support that flexbox feature has.
See the support at [Can I Use](http://caniuse.com/#feat=flexbox).

## Contribute
See the [contributing file](CONTRIBUTING.md).

## License

[MIT License](LICENSE.md) &copy; [Thiago Santos](https://github.com/thiamsantos)
