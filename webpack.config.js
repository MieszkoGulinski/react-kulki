const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader']),
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
    })
  ],
};
