// ===================================
// Required node modules
// ===================================
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const minify = require('gulp-clean-css');

// html
function html() {
  return gulp.src('*.html').pipe(browsersync.stream());
}
// javascript
function js() {
  return gulp
    .src('src/script.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(browsersync.stream());
}

// sass
function css() {
  return gulp
    .src('src/style.scss')
    .pipe(sass())
    .pipe(autoprefixer('>2%', 'ie 11'))
    .pipe(minify())
    .pipe(gulp.dest('dist'))
    .pipe(browsersync.stream());
}

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './',
    },
    port: 3000,
  });
  done();
}
// browsersync
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// watch
function watchFiles() {
  gulp.watch('./src/*.scss', css);
  gulp.watch('./src/*.js', js);
  gulp.watch('*.html', browserSyncReload);
}
const watch = gulp.parallel(watchFiles, browserSync);

exports.default = gulp.parallel(watch, html, css, js);
