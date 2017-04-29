const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const { vue, stylus, pug, babel, extractStyles } = require('./webpack.rules.js')
const { DefinePlugin, LoaderOptionsPlugin } = webpack
const { UglifyJsPlugin, CommonsChunkPlugin } = webpack.optimize

const config = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [vue, stylus, pug, babel]
  },
  plugins: [
    extractStyles,
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/index.pug')
    })
  ],
  performance: { hints: false },
  devtool: 'source-map'
}

function setProduction() {
  pug.use.options.pretty = false

  return config
}

module.exports = env => (env === 'production') ? setProduction() : config
