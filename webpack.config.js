const path = require('path')

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'corleone.umd.js',
    path: path.resolve(__dirname, 'build'),
    libraryTarget: 'umd'
  }
}
