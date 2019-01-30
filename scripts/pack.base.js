const path = require('path');
const webpack = require('webpack');

// https://webpack.docschina.org/plugins/html-webpack-plugin/
const HtmlWebPackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
const __DEV__ = env === 'development';
const __PROD__ = env === 'production';

/**
 * webpack 配置
 * https://webpack.js.org/configuration/#options
 */
const baseConfig = {
    /**
     * 程序的⼊⼝
     * https://webpack.js.org/configuration/entry-context/#entry
     **/
    entry: path.join(__dirname, '../app/index.js'),

    /**
     * 启动开发服务 执行 npm run dev, 输出如下:
     * todo 为什么此处没有build文件，而生产环境有build文件?
     **/
    output: {
        path: path.join(__dirname, '../build'),
        filename: '[name].js'
    },

    /**
     * 模式
     * https://webpack.js.org/concepts/mode/
     **/
    mode: 'development',

    /** 目标环境
     * https://webpack.js.org/configuration/target/#target
     **/
    target: 'web',

    /** 模块
     * https://webpack.js.org/configuration/module/
     * */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [path.join(__dirname, '../app')],
                use: ['babel-loader']
            },
            {
                test: /\.scss$/, // 此处不能配置exclude: /node_modules/,因为@alifd/next 用的是scss,配置后会报错
                use: [                          // 注意：此处顺序不能颠倒，webpack是自下而上解析，上一个 loader 把处理结果交给下一个
                    { loader: 'style-loader' },   // style-loader 将 style 转为 js字符串.最终通过style标签把样式插入到htmL中
                    { loader: 'css-loader' },     // css-loader 将 css 转为 style,
                    { loader: 'sass-loader' }     // sass-loader 将 less 转为 css,
                ]
            },
            {
                test: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2|svg)$/,
                exclude: /node_modules/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },

    /**
     * 插件
     */
    plugins: [
        /**
         * https://webpack.docschina.org/plugins/define-plugin/
         * 创建在编译时可以配置的环境变量
         * 使项目在开发模式和发布模式的构建下允许不同的行为
         * 如果在开发构建中，而不在发布构建中执行日志记录，则可以使用全局常量来决定是否记录日志
         * 参考文献：https://juejin.im/post/5c02378af265da61715e13d7
         * 事实上在scripts的shell命令中已经设置了环境，此处再次设置的目的是 tests process.env.NODE_ENV
         * todo 这个api的作用还不是很清晰，始终没有找到靠谱的说明文档
         */
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env),
            __DEV__,
            __PROD__
        }),
        /**
         * 用来生成html
         * template是入口文件，此处定义为./app/index.html
         * filename是输出的文件，此处定义为./index.html
         */
        new HtmlWebPackPlugin({
            template: './app/index.html',
            filename: './index.html'
        })
    ]
};
module.exports = baseConfig;
