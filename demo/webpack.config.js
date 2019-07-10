const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
  entry: './app.js',
  resolve: {
    alias: {
      "react-croppie": path.resolve('../lib/Croppie.react.js'),
      "react-dom" : path.resolve('./node_modules/react-dom'),
      "react" 	: path.resolve('./node_modules/react')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ],
  output: {
    path: '/',
    publicPath: '/', // instead of publicPath: '/build/'
    filename: '[name].js'
  }
};




