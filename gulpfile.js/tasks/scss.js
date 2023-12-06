// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const autoprefixer = require('gulp-autoprefixer')
const csso = require('gulp-csso')
const rename = require('gulp-rename')
const size = require('gulp-size')
const shorthand = require('gulp-shorthand')
const queries = require('gulp-group-css-media-queries')
const sass = require('gulp-sass')(require('sass'))
// Обработка SCSS
const scss = () => {
  return $.gulp
    .src($.path.scss.src, { sourcemaps: $.app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError(error => ({
          title: 'SCSS',
          message: error.message
        }))
      })
    )
    .pipe(
      sass({
        style: 'compact',
        sourcemap: true,
        includePaths: ['node_modules']
      })
    )

    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(queries())
    .pipe(size({ title: 'SASS before' }))
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(size({ title: 'SASS after' }))
    .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream())
}

module.exports = scss
