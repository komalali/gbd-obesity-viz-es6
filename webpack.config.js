// webpack.config.js

module.exports = {
  entry: ['./app/main.js'],
  output: {
    filename: 'bundle.js',
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
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
  },
};
