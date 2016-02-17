var gulp = require('gulp');
var sass =  require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var source = './src/**';

// Server task
// gulp.task('browser-sync', function() {
//   browserSync.init({
//     server: {
//       baseDir: "./"
//     }
//   });

//   watch("./*.html").on('change', browserSync.reload);
//   watch("./dist/**").on('change', browserSync.reload);
// });

// Sass Task
gulp.task('sass', function() {
  gulp.src(source)
    .pipe(watch(source))
    .pipe(autoprefixer({cascade: false}))
    .pipe(gulp.dest('./'))
});
