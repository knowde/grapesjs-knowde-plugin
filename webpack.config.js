const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const name = pkg.name;
let plugins = [];

module.exports = (env = {}) => {
  const isProd = env.production;

  if (isProd) {
    plugins = [new webpack.BannerPlugin(`${name} - ${pkg.version}`)];
  } else {
    const index = 'index.html';
    const indexDev = '_' + index;
    plugins.push(
      new HtmlWebpackPlugin({
        template: fs.existsSync(indexDev) ? indexDev : index,
        inject: false
      })
    );
  }

  return {
    entry: './src',
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',
    output: {
      path: path.resolve(__dirname),
      filename: `dist/${name}.min.js`,
      library: name,
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: /src/,
          options: { cacheDirectory: true }
        },

        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    externals: { grapesjs: 'grapesjs' },
    plugins: [...plugins, new ExtractTextPlugin('dist/style.css')]
  };
};
