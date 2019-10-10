/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 10:46:05
 * @LastEditTime: 2019-10-10 10:48:44
 * @LastEditors: Please set LastEditors
 */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});