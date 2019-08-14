var path = require('path');

module.exports = [{
    entry: './index.js',
    output: {
        filename: 'pwa.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'PWA',
        libraryTarget: 'umd',
        libraryExport: 'default',
        globalObject: 'this'

    }
}];
