const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/public'),
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 40,
          progressive: true,
        }),
        imageminPngquant({
          speed: 10,
          quality: [0.1, 0.2],
        }),
      ],
    }),
    new WebpackPwaManifest({
      name: 'Bumbu Eyang',
      short_name: 'Bumbu Eyang',
      description: 'Bumbu yang sehat dan kaya akan rempah',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#f3ede7',
      crossorigin: 'use-credentials',
      orientation: 'portrait',
      start_url: '/index.html',
      inject: true,
      ios: true,
      includeDirectory: true,

      icons: [
        {
          src: path.resolve(__dirname, 'src/public/logo/BE_favicon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          type: 'image/png',
          purpose: 'any maskable',
          destination: path.join('icons', 'ios'),
          ios: true,
        },
        {
          src: path.resolve(__dirname, 'src/public/logo/BE_favicon.png'),
          size: '1024x1024',
          destination: path.join('icons', 'ios'),
          ios: 'startup',
        },
        {
          src: path.resolve(__dirname, 'src/public/logo/BE_favicon.png'),
          size: '1024x1024',
          purpose: 'maskable',
        },
      ],
    }),
  ],
};
