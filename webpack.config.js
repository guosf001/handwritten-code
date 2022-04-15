const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (value) => path.resolve(__dirname, value);

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: resolve('dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /.(js|jsx)$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.md$/,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'written code',
      template: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
    },
  },
};
