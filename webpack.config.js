
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')


// npm i style-loader css-loader --save-dev
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
}