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
