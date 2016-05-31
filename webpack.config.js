var path = require('path');
var webpack = require('webpack');
console.log("======================================================================");
console.log(__dirname);
console.log("======================================================================");
module.exports = {

  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
   },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin(path.join(__dirname, 'public/bundle.css'))
    ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
