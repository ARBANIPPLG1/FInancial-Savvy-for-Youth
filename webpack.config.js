// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//         clean: true,
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: [MiniCssExtractPlugin.loader, 'css-loader'],
//             },
//             {
//                 test: /\.(png|jpg|jpeg|gif|svg)$/i,
//                 type: 'asset/resource',
//                 generator: {
//                     filename: 'assets/[name][ext]',
//                 },
//             },
//         ],
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './index.html',
//             filename: 'index.html',
//         }),
//         new CopyWebpackPlugin({
//             patterns: [
//                 { from: 'src', to: 'src' },
//                 { from: 'assets', to: 'assets' },
//             ],
//         }),
//         new MiniCssExtractPlugin({
//             filename: 'styles.css',
//         }),
//     ],
//     mode: 'development',
// };





const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'assets/[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // ✅ Gunakan style-loader agar CSS masuk ke bundle.js
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/dompet.html',
            filename: 'dompet.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/kas.html',
            filename: 'kas.html',
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: 'assets', to: 'assets' }],
        }),
    ],
    mode: 'development',
};






