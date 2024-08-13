const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const babelLoaderConfiguration = {
  test: /\.(ts|tsx|js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      configFile: path.resolve(__dirname, 'babel.config.web.js'),
    },
  },
};

const babelLoaderConfigurationInclude = {
  test: /\.(js|jsx|ts|tsx)$/,
  include: [path.resolve('node_modules/react-native-reanimated')],
};

const cssLoaderConfiguration = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

module.exports = {
  entry: path.resolve('index.js'),
  module: {
    rules: [
      babelLoaderConfiguration,
      cssLoaderConfiguration,
      babelLoaderConfigurationInclude,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({}),
      'process.env.PLATFORM': JSON.stringify('web'),
      __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'), // __DEV__ 변수 정의
    }),
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: [
      '.web.ts',
      '.web.tsx',
      '.web.js',
      '.web.jsx',
      '.android.ts',
      '.android.tsx',
      '.android.js',
      '.android.jsx',
      '.ios.ts',
      '.ios.tsx',
      '.ios.js',
      '.ios.jsx',
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
    ],
  },
  devServer: {
    compress: true,
    port: 8080,
    static: {
      directory: path.resolve('public'),
    },
  },
};
