const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { resolve } = require("path");
// const dotenv = require('dotenv')
const Dotenv = require('dotenv-webpack');
// require('dotenv').config()
const webpack = require('webpack')
var path= require('path')


module.exports = () => {
    // // call dotenv and it will return an Object with a parsed key
    // const env = dotenv.config().parsed
    // // reduce env variables to an oject
    // const envKeys = Object.keys(env).reduce((prev, next) => {
    //   prev[`process.env.${next}`] = JSON.stringify(env[next])
    //   return prev
    // }, {})

  
    return {

      entry: './src/index.tsx',
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
      },

      module: {
        rules: [
          {
            test: [/\.jsx?$/, /\.tsx?$/],
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "@babel/preset-typescript",
                ],
              },
            },
    
            exclude: /node_modules/,
          },
          {
            test: /\.svg$/,
            exclude: /node_modules/,
            use: {
              loader: 'svg-react-loader',
            },
          },
          {
            test: /\.css$/,
            include: /node_modules/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../',
                },
              },
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(gif|png|jpe?g)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          },
      
        ],
      },
      devServer: {
        hot: true, // enable HMR on the server
        historyApiFallback: true,
        port:8081,
      },
      node: {
        global: true,
      },
      plugins: [
      //  new webpack.DefinePlugin(envKeys),
      new Dotenv({ systemvars: true}),
        new HtmlWebPackPlugin({
          template: './src/public/index.html',
          filename: './index.html',
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './src/static/images',
              to: 'static/images',
            },
          ],
        }),
        new MiniCssExtractPlugin({
          filename: 'main.css',
        }),
        new CleanWebpackPlugin(),
      ],
    }
  }
  