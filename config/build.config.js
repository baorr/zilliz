const path = require('path');

const entry = path.resolve(__dirname, '../web/app.js');
const htmlTemplate = path.resolve(__dirname, '../web/index.html');
const outputPath = path.resolve(__dirname, '../web/dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');    //a plugins for html 
//const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
    entry: entry,
    output: {
      filename: 'main.js',
      path: outputPath
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: htmlTemplate,
        hash: true 
      }),
      //new VueLoaderPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'env']
            }
          }
        }
      ]
    },
    resolve: {
    }  
  };

module.exports = {
    config
};