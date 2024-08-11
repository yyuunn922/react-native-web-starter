const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoaderConfiguration = {
  test: /\.(ts|tsx|js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

module.exports = {
  entry: path.resolve('index.js'),
  module: {
    rules: [babelLoaderConfiguration],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
    }),
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: [
      '.web.ts',
      '.ts',
      '.tsx',
      '.web.tsx',
      '.js',
      '.jsx',
      '.web.js',
      '.web.jsx',
    ],
  },
  devServer: {
    compress: true,
    port: 8080,
  },
};
