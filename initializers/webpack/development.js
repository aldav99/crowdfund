const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        bundle: './src/index.js'
    },
    devServer: {
        contentBase: path.join(process.cwd(), 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        modules: [path.resolve(process.cwd(), 'src'), 'node_modules']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            auto: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }
                },
                    'postcss-loader'
                ]
            }
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        base: '/'
    }),
    new MiniCssExtractPlugin()]

};