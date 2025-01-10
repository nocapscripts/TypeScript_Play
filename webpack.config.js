const path = require('path');
const webpack = require('webpack');
const RemovePlugin = require('remove-files-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const ESLintPlugin = require('eslint-webpack-plugin');
const buildPath = path.resolve(__dirname, 'build');
const isProduction = process.env.NODE_ENV === 'development';  // Production flag

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'global.GENTLY': false,
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx', 'js'],
      emitWarning: false,
      emitError: false,
      failOnError: false,
    }),
    new RemovePlugin({
      before: { include: [path.resolve(buildPath, 'build'), path.resolve(buildPath, 'asset')] },
      watch: { include: [path.resolve(buildPath, 'build'), path.resolve(buildPath, 'asset')] },
    }),
    new WebpackObfuscator({
      rotateStringArray: false,
      stringArray: false,
      transformObjectKeys: false,
      compact: false,
      controlFlowFlattening: false,
      deadCodeInjection: false,
      selfDefending: false,
      debugProtection: false,
      disableConsoleOutput: false,
      splitStrings: false,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@server': path.resolve(__dirname, 'build/asset'),
     // '@client': path.resolve(__dirname, 'dist/client'),
    },
  },
  optimization: {
    minimize: isProduction,  // Minimize for production
    splitChunks: {
      chunks: 'all',
    },
  },
  stats: {
    errorDetails: false,
  },
  devtool: isProduction ? 'source-map' : 'eval-source-map',  // Source maps for production and dev
};

const serverConfig = {
  ...commonConfig,
  target: 'node',
  entry: {
    sv_exports: './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(buildPath, 'asset'),
  },
};



module.exports = [serverConfig];
