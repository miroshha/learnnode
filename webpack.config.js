import path from 'path'
const HtmlWebpackPlugin = require('html-webpack-plugin');

export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
}