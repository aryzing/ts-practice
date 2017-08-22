const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    hot: true,
    port: 9000,
    publicPath: '/',
  },
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {test: /\.tsx?/, exclude: /node_modules/, use: ['babel-loader', 'ts-loader']},
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    mainFields: ['browser', 'module', 'main', 'types'],
  },
  watch: true,
}
