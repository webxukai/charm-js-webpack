/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 10:46:23
 * @LastEditTime: 2019-10-10 13:18:34
 * @LastEditors: Please set LastEditors
 */
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});