const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [ '@babel/polyfill', __dirname + '/src' ],
  output: {
    filename: 'index.bundle.js',
    path: __dirname + '/dist',
    publicPath: '/'
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Components: __dirname + '/src/Components',
      Containers: __dirname + '/src/Containers',
      pokeapi: __dirname + '/src/pokeapi',
      CONFIG: __dirname + '/CONFIG.js'
    }
  }
};