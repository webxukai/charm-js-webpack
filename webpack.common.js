/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 10:45:51
 * @LastEditTime: 2019-10-10 14:32:35
 * @LastEditors: Please set LastEditors
 */
 const path = require('path');
 const {CleanWebpackPlugin} = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const webpack = require('webpack');

 module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
              }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },
    plugins: [

        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
 };