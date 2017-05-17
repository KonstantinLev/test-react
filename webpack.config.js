/**
 * Created by Konstantin on 17.05.2017.
 */
var webpack = require('webpack');

module.exports = {

    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }

};