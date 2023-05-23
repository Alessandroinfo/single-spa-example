const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfigEnv, argv)=> {
    let isProduction = argv.p || argv.mode === "production";

    return {
        entry: './src/root-config.js',
        cache: false,

        mode: isProduction ? "production" : "development",
        devtool: 'source-map',
        output: {
            filename: 'root-config.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Single-SPA Example',
                template: './public/index.html',
                templateParameters: {
                    isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
                }
            }),
        ]
    }
};
