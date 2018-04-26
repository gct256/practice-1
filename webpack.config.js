const path = require('path');

module.exports = {
  mode: 'none',
  devtool: 'cheap-module-eval-source-map',

  entry: './src/script.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: ['babel-loader'],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
