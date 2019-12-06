const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    publicPath: '/',  // default
    contentBase: path.join(__dirname, 'public'),
    host: '0.0.0.0',
    port: 3035,
    disableHostCheck: true,
    watchContentBase: true,
    open: true
  },
});
