"use strict";

// IMPORT
// ----------------------------------------------------------------------------
const gulp = require("gulp");
const gulpTS = require("gulp-typescript");
const gulpSourcemaps = require("gulp-sourcemaps");
const gulpNodemon = require("gulp-nodemon");
const del = require("del");
const path = require("path");

// PREPARE PROJECT
// ----------------------------------------------------------------------------
const project = gulpTS.createProject("tsconfig.json");

// BUILD
// ----------------------------------------------------------------------------
gulp.task("build", () => {
  // => Delete old files
  del.sync(["./build/**/*.*"]);
  // => Copy files
  gulp.src("./src/**/*.yml").pipe(gulp.dest("build/"));
  // => Compile TS files
  const tsCompile = gulp
    .src("./src/**/*.ts")
    .pipe(gulpSourcemaps.init())
    .pipe(project());
  return tsCompile.js
    .pipe(
      gulpSourcemaps.write({
        sourceRoot: file =>
          path.relative(path.join(file.cwd, file.path), file.base)
      })
    )
    .pipe(gulp.dest("build/"));
});

// WATCH
// ----------------------------------------------------------------------------
gulp.task("watch", ["build"], function() {
  gulp.watch("./src/**/*.ts", ["build"]);
});

// START
// ----------------------------------------------------------------------------
gulp.task("start", ["build"], function() {
  return gulpNodemon({
    script: "./build/server.js",
    watch: "./build/server.js"
  });
});

// SERVER
// ----------------------------------------------------------------------------
gulp.task("serve", ["watch"], function() {
  return gulpNodemon({
    script: "./build/server.js",
    watch: "./build/"
  });
});