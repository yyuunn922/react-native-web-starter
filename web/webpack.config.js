const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoaderConfiguration = {
  test: /\.(ts|tsx|js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
};

const cssLoaderConfiguration = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

module.exports = {
  entry: path.resolve('index.js'),
  module: {
    rules: [babelLoaderConfiguration, cssLoaderConfiguration],
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
      directory: path.join('public'), // 정적 파일 제공 폴더
    },
  },
};
