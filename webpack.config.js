var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
    app: path.join(__dirname, 'src', 'index.js')
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].bundle.map'
  },

  devtool: '#source-map',

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.scss$/, 
      loader: 'style-loader!css-loader!sass-loader'
    }]
  },

  devServer :{
      contentBase: path.join(__dirname, 'dist'),
      inline: true,
      stats: 'errors-only',

  },
  plugins :[
    new htmlWebpackPlugin({
      template: path.join(__dirname,'src','index.html'),
      hash:true
    })

  ]

}
