const path = require('path');

const srcPath = path.join(__dirname, '..', 'src');
const entryPath =  path.join(srcPath, 'bootstrap.js');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
    mode: 'development',
    context: srcPath,
    entry: {
        app: entryPath,
        vendor: ['react']
    },
    output: {
        filename: '[name].bundle.js',
        path: outputPath
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};