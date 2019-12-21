const merge = require('webpack-merge');
const base = require('./base');

const development = {
  devServer: {
    port: 3000
  }
};

module.exports = merge(base, development);
