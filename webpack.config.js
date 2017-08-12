const path = require('path')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      {test: /\.tsx?/, loader: 'ts-loader'},
    ],
  },
}
