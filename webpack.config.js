var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist')
    },
    entry: './app/index.js',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}