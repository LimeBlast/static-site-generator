"use strict";

var gulp = require('gulp')
  , shell = require("gulp-shell")
  , ghpages = require('gh-pages')
  , browserSync = require('browser-sync')
  , options;

options = {
  jekyllServer: 'localhost:4000',
  dist: './dist/'
};

gulp.task("jekyll:serve", shell.task("jekyll serve"));
gulp.task("jekyll:build:watch", shell.task("jekyll build --watch"));

gulp.task("deploy", function (cb) {
  ghpages.publish(options.dist, {}, cb);
});

gulp.task('browser-sync', function () {
  browserSync({
    proxy: options.jekyllServer
  });
});

gulp.task("default", ["browser-sync", "jekyll:serve"]);
