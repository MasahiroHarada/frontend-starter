'use strict';

require('babel-register');
import gulp from 'gulp';
import sass from 'gulp-sass';
import ejs from 'gulp-ejs';
import plumber from 'gulp-plumber';
import fs from 'fs';
const browserSync = require('browser-sync').create();

import config from './config';

const scssDir = `${config.dir.source.base}/${config.dir.source.scss}`;
const templatesDir = `${config.dir.source.base}/${config.dir.source.templates}`;
const publicDir = config.dir.public.base;
const stylesDir = `${config.dir.public.base}/${config.dir.public.styles}`;

gulp.task('serve', ['sass', 'ejs'], () => {
  browserSync.init({
    server: {baseDir: `./${publicDir}`}
  });

  gulp.watch(`${scssDir}/**/*.scss`, ['sass']);
  gulp.watch(`${templatesDir}/**/*.ejs`, ['ejs']);
  gulp.watch(`${templatesDir}/vars.json`, ['ejs']);

  gulp.watch(`${publicDir}/**/*.html`)
    .on('change', browserSync.reload);
});

gulp.task('sass', () => {
  return gulp.src(`${scssDir}/**/*.scss`)
    .pipe(plumber())
    .pipe(sass(config.sass))
    .pipe(gulp.dest(stylesDir))
    .pipe(browserSync.stream());
});

gulp.task('ejs', () => {
  const templateVars = JSON.parse(fs.readFileSync(`./${templatesDir}/vars.json`));
  console.log(templateVars);
  gulp.src([`${templatesDir}/**/*.ejs`, `!${templatesDir}/**/_*.ejs`])
    .pipe(ejs(templateVars, {}, {ext: ".html"}))
    .pipe(gulp.dest(publicDir));
});

gulp.task('build', ['sass', 'ejs']);

gulp.task('default', ['serve']);
