const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'build/static/js'),
    filename: `bundle.min.js`,
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'automatic' }],
          ],
        },
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};
