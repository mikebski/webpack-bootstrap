const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = env => {
  console.log("Building with env", env)
  return {
    entry: './src/index.js',
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
          }
        },
        {
          test: /\.(png|svg|jpg|gif|ico)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: __dirname + '/src/public/index.html',
        filename: 'index.html',
        inject: 'body'
      }),
      new CopyPlugin([
        {from: __dirname + '/src/public'}
      ])
    ]
  };
}
