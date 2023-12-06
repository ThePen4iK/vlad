const isProd = process.argv.includes('--production')
const isDev = !isProd

module.exports = {
  isProd: isProd,
  isDev: isDev,

  htmlmin: { collapseWhitespace: isProd },

  webpack: { mode: isProd ? 'production' : 'development' },

  imagemin: {
    verbose: true,
    mozjpeg: { quality: 85, progressive: true },
    optipng: { optimizationLevel: 5 }
  },

  fonter: { formats: ['ttf', 'woff'] },

  typograph: ['ru', 'en-US'],

  favicons: {
    appName: 'Gulp v2',
    appShortName: 'Gulp',
    appDescription: 'This is my gulp assembly',
    icons: {
      favicons: true,
      appleIcon: true,
      android: true,
      windows: false,
      yandex: false,
      coast: false,
      firefox: false,
      appleStartup: false
    },
    path: 'img/favicon/'
  },

  zip: {
    name: 'project.zip'
  }
}
