const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/img', to: 'img' }
      ]
    })
  ]
};
