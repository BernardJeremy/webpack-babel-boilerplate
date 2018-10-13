const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'eslint-loader',
        options: {
          fix: true,
        }
      }],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'static'), to: path.resolve(__dirname, 'dist') },
    ]),
    new CleanWebpackPlugin([
      'dist',
    ]),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
