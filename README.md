<img src="https://cdn.rawgit.com/thiamsantos/gridus/master/gridus-logo.svg" height="200" align="right">

# gridus
[![Travis](https://img.shields.io/travis/thiamsantos/gridus.svg)](https://travis-ci.org/thiamsantos/gridus)
[![npm (scoped)](https://img.shields.io/npm/v/gridus.svg)](https://www.npmjs.com/package/gridus)
[![npm](https://img.shields.io/npm/l/gridus.svg)](LICENSE.md)

A semantic flexbox grid made with stylus. It provides seven mixins with the higher powers of flexbox.

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
$ npm install gridus
```
Alternatively, you can install gridus with [yarn](https://yarnpkg.com/).
```bash
$ yarn add gridus
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

## Basic usage
In the parent node of all grids you must specify the behaviour of the container, if it will behaviour like a column or like a row.
```stylus
// The grid will behave like a row
.row
  row()

// The grid will behave like a column
.column
  column()
```

After that you can specify the behaviour of the cells by adding as many as you want mixins in the container.
```stylus
.row
  row()
  align() // optional
  justify() // optional

.column
  column()
  align() // optional
  justify() // optional
```
After that just create the cells and it's behaviuor.
```stylus
.cell
  cell()
  gutter() // optional
  offset() // optional
```
## Mixins

### Align
The align mixin accepts three value 'start', 'center' and 'end'. If passed any different value a error will be throwed.

#### 'start' value
If included in a row will make the elements be aligned horizontally on the top. If included in a column will make the elements be aligned vertically on the left.
```stylus
.align-start
  align('start')
````
The output from code above is.
```css
.align-start {
  align-content: flex-start;
  align-items: flex-start;
}
```

#### 'center' value (default)
If included in a row will make the elements be aligned horizontally on the center. If included in a column will make the elements be aligned vertically on the center.
```stylus
.align-default
  align()
.align-center
  align('center')
````
The output from code above is.
```css
.align-default {
  align-content: center;
  align-items: center;
}
.align-center {
  align-content: center;
  align-items: center;
}
```

#### 'end' value
If included in a row will make the elements be aligned horizontally on the bottom. If included in a column will make the elements be aligned vertically on the right.
```stylus
.align-end
  align('end')
````
The output from code above is.
```css
.align-end {
  align-content: flex-end;
  align-items: flex-end;
}
```

### Cell
The cell mixin accepts four kinds of parameters.

#### Flex value (default)
Create a cell that will automatic size inside his parent.

```stylus
.cell-default
  cell()

.cell-flex
  cell('flex')
```
The output from code above is.
```css
.cell-default {
  flex: 1;
}
.cell-flex {
  flex: 1;
}
```

#### Fraction or percent
The size of the cell. Example: 2/5 will occupy 2 cells of a 5 cells grid.
```stylus
.cell-fraction
  cell(2/5)
```
The output from code above is.
```css
.cell-fraction {
  flex: 0 0 40%;
}
```

#### The minimum with of the cell
The minimum width of a cell. In that way the cells will have the minimum width specified but will occupy all the free space and have the same size in different screens.

```stylus
.cell-unit
  cell(200px)
```
The output from code above is.
```css
.cell-unit {
  flex: 1 0 200px;
}
```

### Column
The mixin column will make a container of cells behave like a column.

```stylus
.column
  column()
```
The output from code above is.
```css
.column {
  display: flex;
  flex: 0 1 auto;
  flex-flow: column wrap;
}
```

### Gutter
The gutter mixins accepts two parameters, the first is the size of the gutter and the second is type of the gutter (inside or outside). By default the size is 1rem and the type is inside.

```stylus
.gutter-default
  gutter()

.gutter-size
  gutter(10px)

.gutter-size-outside
  gutter(10px, 'outside')
```
The output from code above is.
```css
.gutter-default {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.gutter-size {
  padding-left: 5px;
  padding-right: 5px;
}
.gutter-size-outside {
  margin-left: 5px;
  margin-right: 5px;
}
```

### Justify
The justify mixin accepts five different values 'center', 'left', 'right', 'between' and 'around'.
Between and around will distribute the space between the elements or around the elements.

```stylus
.justify-default
  justify()

.justify-start
  justify('start')

.justify-end
  justify('end')

.justify-center
  justify('center')

.justify-around
  justify('around')

.justify-between
  justify('between')
```
The output from code above is.
```css
.justify-default {
  justify-content: center;
  text-align: center;
}
.justify-start {
  justify-content: flex-start;
  text-align: start;
}
.justify-end {
  justify-content: flex-end;
  text-align: end;
}
.justify-center {
  justify-content: center;
  text-align: center;
}
.justify-around {
  justify-content: space-around;
}
.justify-between {
  justify-content: space-between;
}
```

### Offset
The mixin offset will add a margin left to the cell, so this just works together with the row mixin.

```stylus
.offset-fraction
  offset(2/5)

.offset-unit
  offset(200px)
```
The output from code above is.
```css
.offset-fraction {
  margin-left: 40%;
}
.offset-unit {
  margin-left: 200px;
}
```

### Row
The mixin row will make a container of cells behave like a row.

```stylus
.row
  row()
```
The output from code above is.
```css
.row {
  display: flex;
  flex: 0 1 auto;
  flex-flow: row wrap;
}
```

## Contribute
See the [contributing file](CONTRIBUTING.md).

## License

[MIT License](LICENSE.md) &copy; [Thiago Santos](https://github.com/thiamsantos)
