var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('scripts', function() {
  return gulp.src(['public/js/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('bundles.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});
/*css taks*/
gulp.task('css', function() {
  return gulp.src(['public/css/*.css'])
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('dist'))
});
// Default Task
gulp.task('default', ['scripts','css']);