// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const fileInclude = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const size = require('gulp-size')
const typograph = require('gulp-typograf')
// Обработка HTML
const html = () => {
  return $.gulp
    .src($.path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError(error => ({
          title: 'HTML',
          message: error.message
        }))
      })
    )
    .pipe(fileInclude())
    .pipe(typograph({ locale: $.app.typograph }))
    .pipe(size({ title: 'HTML before' }))
    .pipe(htmlmin($.app.htmlmin))
    .pipe(size({ title: 'HTML after' }))
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream())
}

module.exports = html
