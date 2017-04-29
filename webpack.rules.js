const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractStyles = exports.extractStyles = new ExtractTextPlugin('css/style.css')

exports.vue = {
  test: /\.vue$/,
  use: {
    loader: 'vue-loader',
    options: {
      loaders: {
        stylus: extractStyles.extract({
          use: ['css-loader', 'stylus-loader'],
          fallback: 'vue-style-loader'
        })
      }
    }
  }
}

exports.stylus = {
  test: /\.styl$/,
  use: 'stylus-loader'
}

exports.pug = {
  test: /\.pug$/,
  use: {
    loader: 'pug-loader',
    options: {
      pretty: true
    }
  }
}

exports.babel = {
  test: /\.js$/,
  use: 'babel-loader'
}
