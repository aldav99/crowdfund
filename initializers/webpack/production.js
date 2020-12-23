const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    mode: "production",
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(process.cwd(), 'dist/assets')
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

    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        base: '/'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css'
    }),
    new WebpackManifestPlugin()
    ]

};