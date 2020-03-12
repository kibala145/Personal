module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Personal/'
    : '/',
  // devServer: {
  //   port: 8082,
  //   host: '192.100.100.65'
  // },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
