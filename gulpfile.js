var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var sass =  require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var include = require('gulp-include');
var gutil = require('gulp-util');
var csscss = require('gulp-csscss');
var browserSync = require('browser-sync').create();

var mainjs = './src/js/main.js';
var js = './src/js/**';
var css = './src/sass/*.scss';
var components = './src/sass/**';
var img = './src/img/**';

// Server task
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  watch("./*.html").on('change', browserSync.reload);
  watch("./dist/**").on('change', browserSync.reload);
});

// Sass Task
gulp.task('dev-sass-task', function() {
  gulp.src(css)
    .pipe(watch(components))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});
gulp.task('prod-sass-task', function() {
  gulp.src(css)
    .pipe(watch(components))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
});

// Task runners
gulp.task('dev', ['dev-js-task', 'dev-sass-task', 'img-task', 'browser-sync']);
gulp.task('prod', ['prod-js-task', 'prod-sass-task', 'img-task', 'browser-sync']);
