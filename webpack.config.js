const path = require('path');

const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname),
    entry: {
        app: './js/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: './dist/'
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
    },
    devServer: {
      // contentBase: path.join(__dirname, "./dist"),
      contentBase: './dist',
      stats: 'minimal'
    }
};
