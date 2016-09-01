# gridus
A semantic flexbox grid made with stylus. It provides eight mixins with the higher powers of flexbox.

Is fully recommended the use of [autoprefixer-stylus](https://github.com/jescalan/autoprefixer-stylus) along with gridus, because it adds all vendor-prefixers necessary to flexbox works on every modern browser.

`npm install --save-dev gridus`

## Supported browsers
The same support that flexbox feature has.
See the support at [Can I Use](http://caniuse.com/#feat=flexbox)

## Usage
### Import
``` stylus
@import 'path-to-gridus/index.styl'
```
### Gulp
To use with gulp just first install the npm package and then add to use add to your gulpfile as a plugin of stylus.
``` javascript
const gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  plumber = require('gulp-plumber'),
  gridus = require('gridus');

gulp.task('stylus', () =>
  gulp.src('src/*.styl')
    .pipe(plumber())
    .pipe(stylus({
      use: [gridus()]
    }))
    .pipe(gulp.dest('dist/')));
```
### Stylus cli
`$ stylus --use gridus src -o dist`

### Grid settings

In the parent node of the grid you must set one of these configurations:

``` stylus
// The grid will behave like a row
row()

// The grid will behave like a column
column()
```

### The cell mixin

It receives two parameters, the size of the cell and the type of gutter (inside gutter by default, if not specified that is the value used).

#### Size

Create a cell that will automatic size inside his parent.

``` stylus
cell()
// Is the same that
cell(flex)
```

You can specify any interger value bewtween 1 and 12.

``` stylus
// Create a cell with the width of 3 cell of a twelve base grid
cell(2)
```

You two can add a the minimum width of a cell.

``` stylus
// Create a cell that will resize automatically but with the minimun width of 300px
cell(300px)
```

#### Type of gutter

Set 'inside' to gutter that use padding and 'outside' for a gutter that use margin.

``` stylus
cell(flex, 'inside')
cell(flex 'outside')
cell(2, 'inside')
cell(2, 'outside')
cell(300px, 'inside')
cell(300px, 'inside')
```

### Justify Mixin

The justify mixin accepts five values 'center', 'left', 'right', 'between' and 'around'.
Between and around will distribute the space between the elements or around the elements.

Example:

``` stylus
// If include with a row will make the elements be justified horizontally on the center
// If include with a column will make the elements be justified vertically on the center
justify('center')
```

## Offset mixin

The offset accepts only integers between 1 and 11. It deslocates the to right cell according the given value.

``` stylus
// Will deslocates de cell 16.67% to the left
offset(2)
```

### Align mixin

The align mixin accepts three value 'begin', 'end' and 'center'.

#### 'begin' value

If include with a row will make the elements be aligned horizontally on the top.
If include with a column will make the elements be aligned vertically on the left.

``` stylus
align('begin')
```

#### 'end' value

If include with a row will make the elements be aligned horizontally on the bottom.
If include with a column will make the elements be aligned vertically on the right.

``` stylus
align('end')
```

#### 'center' value

If include with a row will make the elements be aligned horizontally on the center.
If include with a column will make the elements be aligned vertically on the center.

``` stylus
align('center')
```

## Contribute

* Fork this repo to your own git
* Make your changes
* Submit a pull request with full remarks documenting your changes
* Pull request MAY then be accepted

## License
[MIT License](https://github.com/thiamsantos/gridus/blob/master/LICENSE.md) © [Thiago Santos](https://github.com/thiamsantos)
