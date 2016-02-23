// lib/font-awesome
// lib/bootstrap
var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
 
gulp.task('font-awesome', function() { 
  return gulp.src('assets/fontawesome/fonts/**.*') 
    .pipe(gulp.dest('lib/font-awesome')); 
});

gulp.task("bootstrap", function(){
  return gulp.src('assets/bootstrap')
    .pipe(sourcemaps.init())
    .pipe(less({
        paths: ["bootstrap/less"]
    }))
    .pipe(concat("main.min.css"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('lib/bootstrap'));
});

gulp.task('default', ['font-awesome', 'bootstrap']);
  
