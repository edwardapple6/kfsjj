'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      usePostCSS: true
    })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [{
        from: /.*/,
        to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
      }, ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ?
      {
        warnings: false,
        errors: true
      } :
      false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.env': require('../config/dev.env')
  //   }),
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
  //   new webpack.NoEmitOnErrorsPlugin(),
  //   // https://github.com/ampedandwired/html-webpack-plugin
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: 'index.html',
  //     inject: true
  //   }),
  //   // copy custom static assets
  //   new CopyWebpackPlugin([
  //     {
  //       from: path.resolve(__dirname, '../static'),
  //       to: config.dev.assetsSubDirectory,
  //       ignore: ['.*']
  //     }
  //   ])
  // ]
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks: ['app']
    }),
    /* pdf */
    new HtmlWebpackPlugin({
      filename: 'pdf.html',
      template: 'pdf.html',
      inject: true,
      chunks: ['pdf']
    }),
    /* btnFir */
    new HtmlWebpackPlugin({
      filename: 'rgsg.html',
      template: 'rgsg.html',
      inject: true,
      chunks: ['rgsg']
    }),
    new HtmlWebpackPlugin({
      filename: 'jjsh.html',
      template: 'jjsh.html',
      inject: true,
      chunks: ['jjsh']
    }),
    new HtmlWebpackPlugin({
      filename: 'cxwt.html',
      template: 'cxwt.html',
      inject: true,
      chunks: ['cxwt']
    }),
    new HtmlWebpackPlugin({
      filename: 'jjdt.html',
      template: 'jjdt.html',
      inject: true,
      chunks: ['jjdt']
    }),
    new HtmlWebpackPlugin({
      filename: 'dtsq.html',
      template: 'dtsq.html',
      inject: true,
      chunks: ['dtsq']
    }),
    new HtmlWebpackPlugin({
      filename: 'dtbg.html',
      template: 'dtbg.html',
      inject: true,
      chunks: ['dtbg']
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'dtcx.html',
    //   template: 'dtcx.html',
    //   inject: true,
    //   chunks: ['dtcx']
    // }),
    new HtmlWebpackPlugin({
      filename: 'yjzcn.html',
      template: 'yjzcn.html',
      inject: true,
      chunks: ['yjzcn']
    }),

    new HtmlWebpackPlugin({
      filename: 'fh.html',
      template: 'fh.html',
      inject: true,
      chunks: ['fh']
    }),
    new HtmlWebpackPlugin({
      filename: 'jjzh.html',
      template: 'jjzh.html',
      inject: true,
      chunks: ['jjzh']
    }),
    new HtmlWebpackPlugin({
      filename: 'wtcx.html',
      template: 'wtcx.html',
      inject: true,
      chunks: ['wtcx']
    }),
    new HtmlWebpackPlugin({
      filename: 'cjcx.html',
      template: 'cjcx.html',
      inject: true,
      chunks: ['cjcx']
    }),
    new HtmlWebpackPlugin({
      filename: 'jjzhcx.html',
      template: 'jjzhcx.html',
      inject: true,
      chunks: ['jjzhcx']
    }),
    new HtmlWebpackPlugin({
      filename: 'kh.html',
      template: 'kh.html',
      inject: true,
      chunks: ['kh']
    }),
    new HtmlWebpackPlugin({
      filename: 'wdjj.html',
      template: 'wdjj.html',
      inject: true,
      chunks: ['wdjj']
    }),
    new HtmlWebpackPlugin({
      filename: 'jjxq.html',
      template: 'jjxq.html',
      inject: true,
      chunks: ['jjxq']
    }),

    new HtmlWebpackPlugin({
      filename: 'ydqrs.html',
      template: 'ydqrs.html',
      inject: true,
      chunks: ['ydqrs']
    }),
    new HtmlWebpackPlugin({
      filename: 'jjdmcx.html',
      template: 'jjdmcx.html',
      inject: true,
      chunks: ['jjdmcx']
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors ?
          utils.createNotifierCallback() :
          undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
