// Плагины
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const svgSprite = require('gulp-svg-sprite')
const svgmin = require('gulp-svgmin')
const cheerio = require('gulp-cheerio')
const replace = require('gulp-replace')

// Обработка sprite
const sprite = () => {
  return $.gulp
    .src($.path.sprite.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'sprite',
          message: error.message
        }))
      })
    )
    .pipe(
      svgmin({
        js2svg: {
          pretty: true
        }
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill')
          $('[stroke]').removeAttr('stroke')
          $('[style]').removeAttr('style')
        },
        parserOptions: {
          xmlMode: true
        }
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg'
          }
        }
      })
    )
    .pipe($.gulp.dest($.path.sprite.dest))
    .pipe($.browserSync.stream())
}

module.exports = sprite
