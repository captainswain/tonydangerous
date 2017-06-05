var gulp         = require('gulp');
var less         = require('gulp-less');
var concat       = require('gulp-concat');
var minify       = require('gulp-minify-css');
var uglify       = require('gulp-uglify');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

/* Task to compile less */
gulp.task('compile-less', function () {
  gulp.src(['./src/less/style.less'])
    .pipe(less())
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(minify())
    .pipe(concat('main.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});

/* Task to uglify js */
gulp.task('compress', function () {
  gulp.src(['./src/js/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/'));
});

/* Task to watch less changes */
gulp.task('watch', function () {
  gulp.watch(['./src/less/**/*.less','./src/less/**/*.css'], ['compile-less']);
  gulp.watch('./src/js/**/*.js', ['compress']);
});


/* Task when running `gulp` from terminal */
gulp.task('default', ['compile-less', 'compress', 'watch']);