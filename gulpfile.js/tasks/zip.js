const del = require('del')

// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const gzip = require('gulp-zip')

// Обработка zip
const zip = () => {
  del.sync([$.app.zip.name])
  return $.gulp
    .src($.path.zip.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'zip',
          message: error.message
        }))
      })
    )
    .pipe(gzip($.app.zip.name))
    .pipe($.gulp.dest($.path.zip.dest))
}

module.exports = zip
