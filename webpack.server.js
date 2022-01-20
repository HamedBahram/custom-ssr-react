const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const sharedConfig = require('./webpack.config')

const serverConfig = {
    target: 'node',
    externalsPresets: { node: true },
    externals: [nodeExternals()],
    entry: './server/index.js',
    output: {
        path: path.join(__dirname, './build/server'),
        filename: 'index.js',
        assetModuleFilename: 'media/[name].[hash:8][ext]',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'css-loader',
                        // options: {
                        //     modules: {
                        //         exportOnlyLocals: true,
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
}

module.exports = merge(sharedConfig, serverConfig)
