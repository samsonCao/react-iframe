const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./pack.base');

const buildConfig = merge(baseConfig, {
    mode: 'production',
    devtool: false,
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].[chunkhash:8].js',
        // 生成的chunk名称
        chunkFileName: '[name].[chunkhash:8].js',
        // publicPath
        publicPath: '/'
    },
    /**
     * 这种方式配置下，就是配置你所引用你的库暴露出的全局变量。
     * 如果我们想引用一个库，但是又不想让webpack打包，并且又不影响我们在程序中以CMD、AMD或者window/global全局等方式进行使用，那就可以通过配置externals
     * 参考资料： https://segmentfault.com/a/1190000012113011
     * 中文官网： https://webpack.docschina.org/configuration/externals/
     */
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        /**
         * 将单个文件或整个目录复制到构建目录
         * 本项目是把public下的文件放到build文件下，生产环境是打包在一起
         * github网址： https://github.com/webpack-contrib/copy-webpack-plugin
         */
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../public'),
                to: path.resolve(__dirname, '../build'),
                ignore: ['.*']
            }
        ]),
        /**
         * 防止在 import 或 require 调用时，生成以下正则表达式匹配的模块：
         * 参考：https://webpack.docschina.org/plugins/ignore-plugin/
         * moment 2.18 会将所有本地化内容和核心功能一起打包（见该 GitHub issue）。你可使用 IgnorePlugin 在打包时忽略本地化内容:
         */
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    /**
     * optimization是webpack4的核心，处理如何压缩代码，如何提取公共代码，如何混淆等待
     * 提供一个或者多个自定义的UglifyjsWebpackPlugin实例来缩小js的体积
     * minimizer是数组，传入压缩的配置项
     *
     */
    optimization: {
        minimizer: [
            /**
             * 压缩js
             * terserOptions参数解释说明： https://github.com/terser-js/terser#minify-options
             */
            new TerserPlugin({
                terserOptions: {
                    ecma: 6,  // 通过ecma重写parse、compress、output
                    compress: {
                        booleans: true // 对布尔上下文的各种优化
                    },        // 传对象，指定自定义压缩选项
                    output: {
                        comments: false,
                        beautify: false
                    }
                }
            }),
            /**
             * 压缩css
             */
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    /**
     * 去除超过包体积大小的提示 WARNING in asset size limit:
     * 或者设置maxAssetSize参数maxAssetSize： 100000000
     */
    performance: {
        hints: false
    }
});

module.exports = buildConfig;
