const merge = require('webpack-merge');
const base = require('./base');

const production = {};

module.exports = merge(base, production);
