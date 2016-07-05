const gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  plumber = require('gulp-plumber'),
  gridus = require('./lib/index.js');

gulp.task('stylus', () =>
  gulp.src('test/*.styl')
    .pipe(plumber())
    .pipe(stylus({
      use: [gridus()]
    }))
    .pipe(gulp.dest('test/')));

gulp.task('default', () =>
  gulp.watch('**/*.styl', ['stylus']));
