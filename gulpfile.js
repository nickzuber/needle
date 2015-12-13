
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var header = require('gulp-header');
var watch = require('gulp-watch');

// Set banner for production file
var pkg = require('./package.json');
var banner = ['/*!',
  ' * <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> ',
  ' * Copyright (c) 2015 <%= pkg.author %>',
  ' */',
  ''].join('\n');

// Contacat & compress javascript files
gulp.task('dispatch', function(){
    gulp.src(['src/*.js'])
    .pipe(browserify({}))
    .pipe(uglify())
    .pipe(rename({
        basename: 'needle',
        extname: '.min.js'
    }))
    .pipe(header(banner, {pkg: pkg}))
    .pipe(gulp.dest('test/scripts/'))
    .pipe(gulp.dest('dist'));
});

// Watch files
gulp.task('watch', function(){
    gulp.watch(['src/lib/*.js'], ['dispatch']);
});

// Set default to dispatch
gulp.task('default', ['dispatch']);
