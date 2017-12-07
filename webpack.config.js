const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'main': './src/main/webapp/main'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'angular2-template-loader',
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          minimize: true,
          caseSensitive: true,
          removeAttributeQuotes:false,
          minifyJS:false,
          minifyCSS:false
        },
        exclude: ['./src/main/webapp/index.html']
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
        loaders: ['file-loader?hash=sha512&digest=hex&name=[hash].[ext]']
      },
    ]
  },
  devServer: {
    contentBase: './target/www',
    proxy: [{
      context: [
        '/api'
      ],
      target: 'http://127.0.0.1:8097',
      secure: false
    }]
  },
  output: {
    path: path.resolve('./target/www'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main/webapp/index.html',
      chunksSortMode: 'dependency',
      inject: 'body'
    }),
  ]
};
