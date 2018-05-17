const webpack = require('webpack')
const path = require('path')
const loaders = require('./webpack.loaders')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

loaders.push({
  test: /\.scss$/,
  loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
  exclude: ['node_modules'],
})

module.exports = {
  entry: {
    index: './src/index.js',
    BookingGenius: './src/BookingGenius/index.js',
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders,
  },
  // optimization: {
    // minimize: false,
    // minimizer: [
    //   new UglifyJsPlugin({
    //     cache: true,
    //     parallel: true,
    //     uglifyOptions: {
    //       compress: false,
    //       ecma: 6,
    //       mangle: true,
    //     },
    //     sourceMap: true,
    //   }),
    // ],
  // },
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     screw_ie8: true,
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
  ],
}
