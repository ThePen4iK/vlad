// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
// Обработка JavaScript
const img = () => {
  return $.gulp
    .src($.path.img.src)
    .pipe(
      plumber({
        errorHandler: notify.onError(error => ({
          title: 'Image',
          message: error.message
        }))
      })
    )
    .pipe(newer($.path.img.dest))
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.gulp.src($.path.img.src))
    .pipe(newer($.path.img.dest))
    .pipe(
      imagemin(
        [imagemin.mozjpeg($.app.imagemin.mozjpeg), imagemin.optipng($.app.imagemin.optipng)],
        { verbose: true }
      )
    )
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.browserSync.stream())
}

module.exports = img
