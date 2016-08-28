const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BASE_PATH =  __dirname;

const PATHS = {
  src: path.join(BASE_PATH, 'src')
}

module.exports = {
  entry: {
    app: PATHS.src
  },
  resolve: {
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.src
      }, {
        test: /\.(eot|ttf|woff|woff(2)?)?$/,
        loader: "file?name=fonts/[hash].[ext]"
     }, {
       test: /\.(jpe?g|png|gif|svg)$/i,
       loaders: [
         'file?hash=sha512&digest=hex&name=images/[hash].[ext]'
       ]
     }, {
       test: /\.scss$/,
       loaders: ['style', 'css', 'sass']
     }, {
        test: /\.html$/,
        loader: "html"
     }
    ]
  },
  sassLoader: {
    includePaths: [PATHS.npm]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devtool: '#source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(PATHS.src, 'index.ejs'),
      title: 'FDUG - Docker',
      inject: false
    })
  ]
}
