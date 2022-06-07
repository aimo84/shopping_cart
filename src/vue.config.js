const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'resources/js/app.js',
      template: 'resources/index.html'
    }
  },
  devServer: {
    hot: false,
    liveReload: false,
    proxy: {
      '/api': {
        target: 'https://pre-store.truecorp.co.th/',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'resources/js/components'),
        '@sections': path.resolve(__dirname, 'resources/js/sections'),
        '@store': path.resolve(__dirname, 'resources/js/store'),
        '@utils': path.resolve(__dirname, 'resources/js/utils'),
        '@pages': path.resolve(__dirname, 'resources/js/pages')
      },
      extensions: ['.js', '.vue', '.json']
    }
  }
}
