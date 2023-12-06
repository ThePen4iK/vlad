// Плагины
const filter = require('gulp-filter')

// Обработка favicon
const filesRoot = [
  'favicon.ico',
  'apple-touch-icon.png',
  'site.webmanifest',
  'browserconfig.xml',
  'safari-pinned-tab.svg'
]

const filesMain = [
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'favicon.svg',
  'mstile-70x70.png',
  'mstile-144x144.png',
  'mstile-150x150.png',
  'mstile-310x150.png',
  'mstile-310x310.png',
  'mstile-310x310.png'
]

const favicon = () => {
  return $.gulp
    .src($.path.favicon.src)
    .pipe(filter(filesRoot))
    .pipe($.gulp.dest($.path.root))
    .pipe($.gulp.src($.path.favicon.src))
    .pipe(filter(filesMain))
    .pipe($.gulp.dest($.path.favicon.dest))
    .pipe($.browserSync.stream())
}

module.exports = favicon
