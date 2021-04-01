const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  const devMode = options.mode !== 'production';

  return {
    optimization: {
      minimizer: [
        new TerserPlugin({ cache: true, parallel: true, sourceMap: devMode }),
        new OptimizeCSSAssetsPlugin({}),
      ]
    },
    entry: {
      'client-db': './js/client_db.js',
      'client-ledger': './js/client_ledger.js',
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../priv/static/js'),
      publicPath: '/js/',
    },
    devtool: devMode ? 'eval-cheap-module-source-map' : undefined,
    // devtool: devMode ? 'inline-source-map' : undefined,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          use: [
            {
              loader: 'elm-hot-webpack-loader',
            }, {
              loader: 'elm-webpack-loader',
              // options: {
                // cwd: path.resolve(__dirname, 'elm'),
                // files: [
                //   'elm/src/Db/Main.elm',
                //   'elm/src/Ledger/Main.elm',
                // ].map(name => path.resolve(__dirname, name)),
              // }
            }
          ],

          options: {
            debug: options.mode === "development",
            optimize: options.mode === "production",
          },
        },
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: '../css/[name].css' }),
      new CopyWebpackPlugin([{ from: 'static/', to: '../' }]),
    ]
      .concat(devMode ? [new HardSourceWebpackPlugin()] : []),
  }
};
