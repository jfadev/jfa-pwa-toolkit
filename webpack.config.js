const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin-legacy');
const CopyPlugin = require('copy-webpack-plugin');
const babel = require("@babel/core");

module.exports = [{
        mode: 'production',
        entry: './index.js',
        output: {
            filename: 'pwa.js',
            path: path.resolve(__dirname, 'dist'),
            library: 'PWA',
            libraryTarget: 'umd',
            libraryExport: 'default',
            globalObject: 'this'
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false
                        },
                        compress: {
                            drop_console: true
                        }
                    }
                })
            ]
        },
        plugins: [
            new CopyPlugin([{
                from: 'src/sw/*',
                to: 'sw/',
                flatten: true,
                transform(content, path) {
                    return babel.transformSync(content, {
                        presets: [
                            require("@babel/preset-env"),
                            require("babel-preset-minify")
                        ],
                        comments: false
                    }).code;
                }
            }])
        ]
    },
    {
        mode: 'production',
        target: 'node',
        entry: './src/maker/index.js',
        output: {
            filename: 'maker.js',
            path: path.resolve(__dirname, 'dist'),
        },
        externals: [nodeExternals()],
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false
                        }
                    }
                })
            ]
        }
    }
];
