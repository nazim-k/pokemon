const TerserJSPlugin = require('terser-webpack-plugin'); // minimizer
const merge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

module.exports = merge(webpackCommonConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        sourceMap: true,
        terserOptions: {
          compress: {
            ecma: 6
          },
          warnings: false,
          output: {
            comments: false,
          }
        }
      }),
    ],
    noEmitOnErrors: true,
    occurrenceOrder: true
  }
});