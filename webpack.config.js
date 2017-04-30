const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const { vue, stylus, pug, babel, extractStyles } = require('./webpack.rules.js')
const { DefinePlugin, LoaderOptionsPlugin } = webpack
const { UglifyJsPlugin } = webpack.optimize

const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [vue, stylus, pug, babel]
  },
  resolve: {
    extensions: ['.vue', '.js', '.json', '.pug'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    extractStyles,
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/view.pug')
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: 'eval'
}

function setProduction() {
  pug.use.options.pretty = config.devtool = false

  config.plugins = config.plugins.concat([
    new DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new LoaderOptionsPlugin({
      minimize: true
    })
  ])

  return config
}

module.exports = env => (env === 'production') ? setProduction() : config
