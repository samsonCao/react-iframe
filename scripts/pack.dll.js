const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        vendor: [
            '@alifd/next',
            '@rematch/core',
            '@rematch/loading',
            'connected-react-router',
            'history',
            'moment',
            'prop-types',
            'react',
            'react-dom',
            'react-loadable',
            'react-redux',
            'react-router-dom',
            'redux'
        ]
    },
    output: {
        path: path.join(__dirname, '../dll'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        /**
         * 主要作用是生成资源manifest.json
         * 每一个公共库中的js文件，都会有一个对应的资源ID。
         * 同时生成一个打包文件，一般是依赖库，比如vendor.bundle.js, 这个bundle会暴露给全局一个类似require功能的函数，这个全局函数的名字是可以配置的,
         * 把vendor中的所有文件打包成一个统一的dll文件，一般都不会变动
         * 用来和main.js的业务代码分开打包
         * 分包后，npm run dev 只会打包业务代码，会加快打包速度，会减小包体积，会加快热更新速度
         */
        new webpack.DllPlugin({
            name: '[name]_library',
            path: path.join(__dirname, '../dll', '[name]-manifest.json')
        })
    ]
};
