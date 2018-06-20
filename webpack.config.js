var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
                MiniCssExtractPlugin.loader,
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }, {
            test: /\.png$/, 
            use: 'url-loader'
        }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new MiniCssExtractPlugin({
			filename: "styles.css"
		})
    ]
}