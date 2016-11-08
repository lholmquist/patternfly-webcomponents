var webpack = require('webpack');
var path = require('path');

module.exports = {

  context: __dirname,

  entry: {
    'patternfly': './src/patternfly',
    'pf-alert': './src/pf-alert/index',
    'pf-list-view': './src/pf-list-view/index',
    'pf-tabs': './src/pf-tabs/index',
    'pf-utilization-bar-chart': './src/pf-utilization-bar-chart/index',
    'pf-utils': './src/pf-utils/index'
  },

  resolve: {
    root: [
      path.join(__dirname, "src/pf-alert"),
      path.join(__dirname, "src/pf-list-view"),
      path.join(__dirname, "src/pf-tabs"),
      path.join(__dirname, "src/pf-utilization-bar-chart"),
      path.join(__dirname, "src/pf-utils")
    ]
  },

  output: {
    path: path.join(__dirname, './dist/js/'),
    publicPath: './',
    filename: '[name].js'
  },

  externals: {
  },

  plugins: [
  ],

  module: {
    loaders: [
      //js loader
      {
        loader: "babel",

        // Options to configure babel with
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};