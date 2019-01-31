const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const baseConfig = require('./pack.base');

const devConfig = merge(baseConfig, {
    /**
     * 指定环境
     */
    mode: 'development',

    /**
     * 指定一种sourceMap模式
     * 7种对比：https://www.cnblogs.com/wangyingblog/p/7027540.html
     * 整体来看 下面这种模式开发环境打包的体积最小
     */
    devtool: 'inline-source-map',

    /**
     * 指定端口号和ip
     */
    devServer: {
        host: 'localhost',
        port: '8088'
    },

    /**
     * 插件
     */
    plugins: [
        /**
         * DllReferencePlugin 是在打包过程中使用的，在打包业务代码时，
         * 每遇到一个在manifest.json中出现的文件，就可以利用上述 vendor.bundle.js 暴露的全局函数进行相应处理，
         * 而不会把这个文件打包进来---以此提高打包速度和热更新速度
         */
        new webpack.DllReferencePlugin({
            manifest: require(path.join(__dirname, '../dll', 'vendor-manifest.json'))
        }),
        /**
         * 把打包生成的dll的js文件自动插入html中
         */
        new AddAssetHtmlPlugin({
            filepath: require.resolve('../dll/vendor.dll.js'),
            includeSourcemap: false
        })
    ]
});

module.exports = devConfig;
