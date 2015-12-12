
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var watch = require('gulp-watch');

// Contacat & compress javascript files
gulp.task('dispatch', function(){
    gulp.src(['src/*.js'])
    .pipe(browserify({}))
    .pipe(uglify())
    .pipe(rename({
        basename: 'needle',
        extname: '.min.js'
    }))
    .pipe(gulp.dest('test/scripts/'))
    .pipe(gulp.dest('dist'));
});

// Watch files
gulp.task('watch', function(){
    gulp.watch(['src/lib/*.js'], ['dispatch']);
});

// Set default to dispatch
gulp.task('default', ['dispatch']);