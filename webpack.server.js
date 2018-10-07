const path=require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: './src/app.js',
    devServer: {
        contentBase: path.join(__dirname, './public'),
        open : true,
        port: 8000,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
    },
};
