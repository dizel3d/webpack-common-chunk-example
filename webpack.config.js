const webpack = require('webpack');
const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        admin: './admin.js',
        user: './user.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('app.js')
    ]
};
