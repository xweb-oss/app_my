'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/cusc/rbacadmin/**': {
          target: 'http://172.30.0.59:40005/cusc/rbacadmin',
          pathRewrite: {
              '^/cusc/rbacadmin': ''
          },
          secure: false
      },
      '/datatransfer/**': {
          target: 'http://172.23.131.19:40017',
          pathRewrite: {
              '^/datatransfer': ''
          },
          secure: false
      },
      '/base/**': {
          target: 'http://172.30.0.59:41007',
          pathRewrite: {
              '^/base': ''
          },
          secure: false
      },
      '/dic': {
        target: 'http://192.168.43.88:8080', //代理接口
        changeOrigin: true,
        pathRewrite: {
        '^/dic': '' //代理的路径
        }
      },
      '/gateway/amsp/**': {
          //  target: 'http://172.30.0.60:41007',  //dist
          // target: 'http://172.30.0.59:41007',
          // target: 'http://172.23.131.138:41007', // 愉快
          // target: 'http://172.23.131.131:41007', // 罗海波
          // target: 'http://172.23.131.142:41018', // 叶中
          // target: 'http://172.23.131.140:41007',
          // target: 'http://172.23.131.19:41007',
          pathRewrite: {
              '^/gateway/amsp': ''
          },
          secure: false
      }
  },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8081, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}