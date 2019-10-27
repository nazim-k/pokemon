const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');
const PORT = 3000;

module.exports = env => merge(webpackCommonConfig, {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: __dirname + 'dist',
    compress: true,
    open: true,
    port: env.PORT || PORT
  }
});