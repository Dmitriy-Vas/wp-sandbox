'use strict';

const
  gulp = require('gulp'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  newer = require('gulp-newer'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),

  dir = {
    src: './src/',
    dst: './../public_html/wp-content/themes/vasbox/'
  };

function clean() { return del([dir.dst], { force: true }); }

function images() {
  return gulp.src(dir.src + 'images/**/*')
    .pipe(newer(dir.dst + 'images'))
    .pipe(imagemin())
    .pipe(gulp.dest(dir.dst + 'images'));
}

function php() {
  return gulp.src(dir.src + 'php/**/*')
    .pipe(newer(dir.dst))
    .pipe(gulp.dest(dir.dst));
}

function css() {
  return gulp.src([dir.src + 'sass/style.sass', dir.src + 'sass/**/*'])
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(dir.dst));
}

function js() {
  return gulp.src(dir.src + 'js/**/*')
    .pipe(newer(dir.dst + 'js'))
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(dir.dst + 'js'));
}

function watch() {
  gulp.watch(dir.src + 'php', php);
  gulp.watch(dir.src + 'images', images);
  gulp.watch(dir.src + 'sass', css);
  gulp.watch(dir.src + 'js', js);
}

exports.build = gulp.parallel(images, php, css, js);
exports.watch = gulp.series(exports.build, watch);
exports.default = exports.build;
exports.clean = clean;
