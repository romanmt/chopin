var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

const _ = require('lodash')

const DEBUG = !_.includes(process.argv, '--release')
const VERBOSE = _.includes(process.argv, '--verbose')
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  __DEV__: DEBUG,
};

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


const config = {

  resolve: {
    root: [
      path.resolve('./src')
    ]
  },
  module: {

    loaders: [
      { test: /\.scss$/,
        loaders: ['css', 'sass']
      },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'react-hot!babel' },
      { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
      { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" },
      { test: /\.json$/, loader: "json" }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules")]
  },
  devtool: 'source-map'
};

const clientConfig = _.extend(_.clone(config), {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', // Setting the URL for the hot reload
    'webpack/hot/only-dev-server', // Reload only the dev server
    './src/index.jsx'
  ],
  target: 'web',
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Wire in the hot loading plugin
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/assets/',
    filename: 'bundle.js',
    sourceMapFileName: 'bundle.map'
  },
})

const serverConfig = _.extend(_.clone(config), {
  entry: [
    './src/server.jsx'
  ],
  target: 'node',
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();',
                           { raw: true, entryOnly: false })
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  externals: nodeModules,
  output: {
    path: __dirname + '/dist',
    publicPath: '/assets/',
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    sourceMapFileName: 'server.map'
  },
})

const configList = [];

module.exports = [clientConfig, serverConfig]

