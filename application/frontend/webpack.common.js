const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // imports in reverse order
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'src/index.html',
    }),
    new webpack.ProvidePlugin({
        'React':    'react',
        'ReactDOM': 'react-dom',
    }),
  ]
}
