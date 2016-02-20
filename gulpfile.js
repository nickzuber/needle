
var gulp = require('gulp');
var uglify = require('gulp-uglify'); // minify build files
var rename = require('gulp-rename'); // custom name for build files
var browserify = require('gulp-browserify'); // compiles Needle module
var header = require('gulp-header'); // custom comment header on build files
var watch = require('gulp-watch'); // auto compile when editing

// Set banner for production file
var pkg = require('./package.json');
var banner = ['/*!',
  ' // <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> ',
  ' // Copyright (c) 2015 <%= pkg.author %>',
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
    .pipe(gulp.dest('examples/scripts/'))
    .pipe(gulp.dest('build'));
});

// Watch files
gulp.task('watch', function(){
    gulp.watch(['src/lib/*.js'], ['dispatch']);
});

// Set default to dispatch
gulp.task('default', ['dispatch']);
