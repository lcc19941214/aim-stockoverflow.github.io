var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var shell = require('gulp-shell');

var devPath = './dev';
var distPath = './static';

gulp.task('webpack', function() {
  return gulp
    .pipe(devPath)
    .pipe(webpack)
    .pipe(gulp.dest(distPath));
});

gulp.task('image', function() {
  return gulp
    .pipe(`${devPath}/images/*.*`)
    .pipe(gulp.dest(`${distPath}/images`));
});

gulp.task('clear', function() {
  return gulp
    .pipe(distPath, { read: false })
    .pipe(shell('rm -rf ' + distPath));
});

gulp.task('start', ['clear', 'image', 'webpack']);