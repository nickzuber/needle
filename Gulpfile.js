
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

// Contacat & compress javascript files
gulp.task('dispatch', function(){
    gulp.src(['src/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('test/scripts/'));
});

// watch files
gulp.task('watch', function(){
    gulp.watch(['src/*.js'], ['dispatch']);
});

// set default
gulp.task('default', ['dispatch']);