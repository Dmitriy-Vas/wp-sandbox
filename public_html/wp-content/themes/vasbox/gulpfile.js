'use strict';

const
  gulp = require('gulp'),
  del = require('del'),
  imagemin = require('gulp-imagemin'),
  newer = require('gulp-newer'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),

  dir = {
    src: './src/',
    build: './build/'
  };

gulp.task('clean', () => del([dir.build]) );

gulp.task('images', () => {
  return gulp.src(dir.src + 'images/*')
    .pipe(newer(dir.build + 'images'))
    .pipe(imagemin())
    .pipe(gulp.dest(dir.build + 'images'));
});

gulp.task('css', () => {
  return gulp.src(dir.src + 'sass/*')
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(gulp.dest(dir.build + 'css'));
});

gulp.task('php', () => {
  return gulp.src(dir.src + 'php/*')
    .pipe(newer(dir.build))
    .pipe(gulp.dest(dir.build));
});
