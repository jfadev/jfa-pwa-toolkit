var path = require('path');

module.exports = [
    // {
    //     entry: './src/lib/pwa.js',
    //     output: {
    //         filename: 'pwa.esm.js',
    //         path: path.resolve(__dirname, 'dist'),
    //         // libraryTarget: 'commonjs-module'
    //     }
    // },
    {
        entry: './src/lib/pwa.js',
        // module: {
        //     rules: [{
        //         test: /pwa-var\.js/,
        //         exclude: /(node_modules|bower_components)/,
        //         use: {
        //             loader: 'babel-loader',
        //             options: {
        //                 presets: ['@babel/preset-env']
        //             }
        //         }
        //     }]
        // },
        output: {
            filename: 'pwa.js',
            path: path.resolve(__dirname, 'dist'),
            library: 'pwa',
            libraryTarget: 'umd',
            libraryExport: 'default',
            globalObject: 'this'

        }
    }
];
