// webpack.config.js

module.exports = {
  entry: ['./app/main.js'],
  output: {
    filename: 'bundle.js',
  },
  node: {
    fs: 'empty',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        loader: 'eslint-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};
