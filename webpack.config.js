const path = require('path');

const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './js'),
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            // Loaders for other file types can go here
        ]
    }
};