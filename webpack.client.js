const path = require('path')
const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sharedConfig = require('./webpack.config')

const clientPort = 8080

const clientConfig = {
    target: 'web',
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, './build/client'),
        filename: 'scripts/bundle.js',
        assetModuleFilename: 'media/[name].[hash:8][ext]',
        publicPath: '',
    },
    devServer: {
        port: clientPort,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        // options: {
                        //     modules: {
                        //         exportLocalsConvention: 'camelCase',
                        //         localIdentName: '[local]_[hash:base64:5]',
                        //     },
                        // },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/bundle.css',
        }),
    ],
}

module.exports = merge(sharedConfig, clientConfig)
