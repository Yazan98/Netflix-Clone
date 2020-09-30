const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CommonConfigWebpackPlugin = require('common-config-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  plugins: [
    // Cleans the dist folder before the build starts
    new CleanWebpackPlugin(),
    // Multi threading babel loader configuration with caching for .js and .jsx files
    // Multi threading typescript loader configuration with caching for .ts and .tsx files
    // SCSS Configuration for .css .module.css and .scss .module.scss files
    // File loader configuration for .woff and .woff2 files
    // File loader configuration for .gif .jpg .jpeg .png and .svg files
    // https://github.com/namics/webpack-config-plugins/
    new CommonConfigWebpackPlugin(),
    // Generate a base html file and injects all generated css and js files
    new HtmlWebpackPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: [node_modules_dir],
      loader: 'babel'
    },
      {
        test: /\.scss$/,
        exclude: [node_modules_dir],
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "not_exist_path")
        ],
        loader: "style!css"
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=512&&name=[path][name].[ext]?[hash]'
      }]
  }
};

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};