[react16.7.0生命周期介绍.md](https://github.com/samsonCao/react-iframe/blob/master/newLifeCircle.md)
[学习本项目需要具备的基础知识介绍.md](https://github.com/samsonCao/react-iframe/blob/master/%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86%E4%BB%8B%E7%BB%8D.md)
[学习本项目用到的技术栈介绍.md](https://github.com/samsonCao/react-iframe/blob/master/technology-stack.md)
[各个框架的对比.md](https://github.com/samsonCao/react-iframe/blob/master/%E6%A1%86%E6%9E%B6%E5%AF%B9%E6%AF%94.md)

### 运行项目
```javascript
npm install
npm run dll
npm run dev
```

### 新建项目
- mkdir react-iframe创建文件夹
- cd react-iframe进入自己的项目文件夹
- npm init 创建package.json仓库
- touch .gitignore 创建文件.gitignore
- mkdir app 创建入口文件夹app
- mkdir scripts 创建脚本文件夹scripts
    - touch scripts/pack.dev.js 在scripts文件夹下创建开发环境脚本文件
    - touch scrpts/pack.build.js 在scrits文件夹下创建打包配置脚本文件
- touch app/index.html 创建入口html文件

### 开发环境安装的依赖 npm i --save-dev xxxx

- webpack
    - 用于编译JavaScript模块
- webpack-cli
    - 是一种在命令行下使用 Babel 编译文件的简单方法
    - webpack v4或更高版本，需要安装CLI。
    - 官网链接: https://github.com/webpack/webpack-cli
- webpack-dev-server
    - webpack官方提供的一个小型Express服务器。使用它可以为webpack打包生成的资源文件提供web服务。
    - 为静态文件提供服务
    - 自动刷新和热替换(HMR)
    - 配置在./package.json-->scripts-->dev:webpack-dev-server  scripts/pack.dev.js-->devServer: {}
    - 官网链接: https://webpack.js.org/configuration/dev-server/
- cross-env
    - 跨平台地设置及使用环境变量,设置的环境变量会被webpack读取
    - 设置 ./package.json--> scripts/dev--> "dev": "cross-env NODE_ENV=development
    - 官网链接https://github.com/kentcdodds/cross-env#readme
- @babel/cli
    - 用于从命令行编译文件
    - 官网链接： https://babeljs.io/docs/en/babel-cli/
- @babel/core
    - babel的核心依赖包， 包括了整个babel工作流。
    - babel的配置文件时.babelIrc,存放在项目的根目录下,使用Babel的第一步，就是配置这个文件
    - 如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块
    - 链接: https://babeljs.io/docs/en/next/babel-core.html
- @babel/preset-env
    - 可以根据配置的目标浏览器或者运行环境来自动将ES2015+的代码转换为es5
    - 获取指定的任何目标环境，并根据其映射检查它们，以编译插件列表并将其传递给Babel。
    - 在 ./.babelrc中配置
    - 链接： https://babeljs.io/docs/en/babel-preset-env/
    - 第三方说明文档 ： http://www.cnblogs.com/chyingp/archive/2018/06/05/9137849.html
- @babel/preset-react
    - 专门针对react的转码包，例如：转换[JSX](https://facebook.github.io/jsx/)语法。
    - 官网链接：https://babeljs.io/docs/en/babel-preset-react/
- @babel/polyfill
    - Babel默认只转换新的JavaScript句法（syntax），而不转换新的API
    - 举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。
    - 可以理解为兼容性补丁
    - 官网链接： https://babeljs.io/docs/en/babel-polyfill/
    - 解释说明参考链接： https://remysharp.com/2010/10/08/what-is-a-polyfill
- @babel/plugin-proposal-class-properties
    - 转换es2015静态类属性以及使用es2016属性声明的语法例如class类
    - 类的介绍： http://es6.ruanyifeng.com/#docs/class
    - 官网链接： https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
- @babel/plugin-proposal-decorators
    - 类修饰器例如@xxx
    - 类修饰器定义和解释： http://es6.ruanyifeng.com/#docs/decorator
    - 官网链接： https://babeljs.io/docs/en/next/babel-plugin-proposal-decorators.html
- @babel/plugin-syntax-dynamic-import
    - 使babel能够理解动态的import语法，可以解析import语法
    - react中做代码拆分的工具
    - react官方推荐的代码拆分示例：https://reacttraining.com/react-router/web/guides/code-splitting
    - 官网链接： https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/
- @babel/plugin-transform-runtime
    - 会添加到每个文件和每个模块中，避免编译过程中的重复。减小库和工具包的体积。
    - 启用后babel会使用babel-runtime 下的工具函数，转译代码
    - 在没有使用 babel-runtime 之前，库和工具包一般不会直接引入 polyfill。
    否则像 Promise 这样的全局对象会污染全局命名空间，这就要求库的使用者自己提供 polyfill。这些 polyfill 一般在库和工具的使用说明中会提到，比如很多库都会有要求提供 es5 的 polyfill。在使用 babel-runtime 后，库和工具只要在 package.json 中增加依赖 babel-runtime，交给 babel-runtime 去引入 polyfill 就行了；
    - 官网链接：https://babeljs.io/docs/en/babel-plugin-transform-runtime
- babel-loader
    - 允许Babel和webpack转换JavaScript文件
    - 官网链接：https://webpack.docschina.org/loaders/babel-loader/
- html-webpack-plugin
    - 用来生成编译后的html文件，其中包含output的filename所命名的js文件
    - 官网链接： https://webpack.docschina.org/plugins/html-webpack-plugin
    - 详细解释： https://www.npmjs.com/package/html-webpack-plugin
- sass-loader
    - 用sass的格式写css
    - 依赖node-sass style-loader css-loader
    - 官方git: https://github.com/webpack-contrib/sass-loader
- css-loader
    - 加载.css文件
    - css-loader的npm介绍： https://www.npmjs.com/package/css-loader
- style-loader
    - 使用style标签将css-loader内部样式注入到我们的HTML页面
    - 一般用在开发环境
    - style-loader的npm介绍：https://www.npmjs.com/package/style-loader
- node-sass
    - 高效的本地编译sass到css文件，甚至可以通过中间件的方式自动编译
    - git网址： https://github.com/sass/node-sass
- file-loader
    - 引入文件用 例如：import img from './file.png';
    - file-loader的npm介绍： https://www.npmjs.com/package/file-loader
- mini-css-extract-plugin
    - 将CSS提取为独立的文件的插件，对每个包含css的js文件都会创建一个CSS文件，支持按需加载css和sourceMap。要求webpack4及其以上的版本
    - 只能用在生成环境，并且不能有style-loader，因此开发环境配style-loader,生产环境配这个。
    - git官网 https://github.com/webpack-contrib/mini-css-extract-plugin
- terser-webpack-plugin
    - 压缩JS，只支持webpack4.0.0以上
    - git官网 https://github.com/webpack-contrib/terser-webpack-plugin
- optimize-css-assets-webpack-plugin
    - mini-css-extract-plugin分离css文件再通过optimize-css-assets-webpack-plugin压缩css文件
    - 主要用在生产环境
    - github官网： https://github.com/NMFR/optimize-css-assets-webpack-plugin
- babel-plugin-import
    - 按需引入 import
    - git地址 https://github.com/ant-design/babel-plugin-import
- eslint
    - 代码检查工具详情请看-- 基础知识介绍.md
- babel-eslint
    - 只要是babel支持的代码，都会有eslint校验。如果不配置，值支持eslint原生的语法
    - .eslintrc文件中的parse解析器是babel-eslint
    - github网址：https://github.com/babel/babel-eslint
- eslint-plugin-babel
    - 让eslint支持一些实验中的校验规则,即使这些规则即使是非标准的，通过这个插件也可以避免报错
    - 需要在.eslintrc的plugins中配置eslint-plugin-babel,省略了前缀eslint-plugin-
    - github地址：https://github.com/babel/eslint-plugin-babel
- eslint-config-standard
    - 手动配置eslint，要和下面的命令共用，并且要要在.eslintrc中设置extends
        npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
    - 适用于JavaScript标准样式的ESLint 可共享配置-高级用法
    - 作用是使用.eslintrc中的继承 extends,共享一些配置
    - github地址：https://github.com/standard/eslint-config-standard
- eslint-plugin-standard
    - 标准的eslint规则
    - https://github.com/standard/eslint-plugin-standard#readme
- eslint-plugin-promise
    - 使用JavaScript的promise的最佳实践,内置了一些校验规则，可以直接继承使用
    - 需要在.eslintrc中的extends中配置"plugin:promise/recommended"
    - https://github.com/xjamundx/eslint-plugin-promise
- eslint-plugin-import
    - 用于支持ES2015+ (ES6+)的 import/export语法的eslint检测
    - 防止错误拼写文件路径和导出名称的问题
    - 需要在.eslintrc中配置settings对象
    - github地址：https://github.com/benmosher/eslint-plugin-import
- eslint-plugin-node
    - 针对nodejs的其它eslint规则
    - github地址：https://github.com/mysticatea/eslint-plugin-node#readme
- eslint-config-standard-react
    - 用于JavaScript标准样式的 React / JSX支持的ESLint 可共享配置
    - github地址： https://github.com/standard/eslint-config-standard-react
- eslint-plugin-react
    - 针对react实现的特定eslint规则
    - 如果eslint是全局的，此处引入的eslint-plugin-react也必须放在全局
    -github地址： https://github.com/yannickcr/eslint-plugin-react
- pre-commit
    - 预提交时检查代码是否符合eslint校验规则
    - 需要再package.json中配置pre-commit字段
    - github网址：https://github.com/observing/pre-commit
- add-asset-html-webpack-plugin
    - 将JavaScript或CSS资源添加到生成的HTML中
    - 用在项目分包压缩中，本项目插入的是dll文件
    - 依赖html-webpack-plugin，因为要先生成html文件才能插入
    - github网址： https://github.com/SimenB/add-asset-html-webpack-plugin#readme
- copy-webpack-plugin
    - 将单个文件或整个目录复制到构建目录
    - 本项目是把public下的文件放到build文件下，生产环境是打包在一起
    - github网址： https://github.com/webpack-contrib/copy-webpack-plugin
- webpack-merge
    - 合并scripts文件夹中的某些js文件
    - 本项目是把pack.base.js中的文件合并到pack.build.js中
    - github网站： https://github.com/survivejs/webpack-merge

- plop
    - 使用plop配置模板，通过命令行生成模板代码
    - github网址：https://github.com/amwmedia/plop
### 在生产环境安装的依赖 npm i --save xxx
- react
    - 是react的核心代码，包含生成虚拟dom的函数react.createElement,以及Component类等基础配置
    - 官网： https://reactjs.org/
- react-dom
    - 核心功能时把虚拟dom渲染到文中变成真实dom，一般在入口文件中用ReactDOM.render(element, container[, callback])
    - 官网: https://reactjs.org/docs/react-dom.html
- prop-types
    - 依赖react和react-dom,主要作用是对传入的属性数据做类型校验
    - 官网： https://reactjs.org/docs/typechecking-with-proptypes.html
- @babel/runtime
    - 让编译模块复用工具函数,减小编译后的代码体积
    - 需要安装babel/plugin-transform-runtime在生产环境
- alifd/next
    - 是 Fusion Design 中的面向 PC 端可配置组件库，基于 React 实现，支持所有现代浏览器和 IE9+。
    - 官方文档 https://fusion.design/component/doc/105
    - 推荐在开发环境配置babel-plugin-import，在.babeIrc中进行配置，按需引入
- moment
    - alifd依赖moment, 因此要先引入moment
    - moment是JavaScript中一个处理日期的类库
    - 中文官网 http://momentjs.cn/
- react-router-dom
    - 把react的路由和dom绑定起来，实现路由的核心功能
    - 和react-route区别是，react-router-dom是在react-router基础上的再次封装，并且增加了一些新功能
    - 简单的对比: [对比分析](https://github.com/mrdulin/blog/issues/42)
    - 官网链接： https://reacttraining.com/react-router/web/guides/quick-start
- react-redux
    - Redux官方提供的React绑定库,连接组件和数据中心,也就是把React和Redux联系起来
    - 主要用到Provider组件绑定数据store
    - github网址： https://react-redux.js.org/
- connected-react-router
    - 和history一起，将路由器状态与redux存储同步。
    - git官网：https://github.com/supasate/connected-react-router
- history
    - 通过 connected-react-router 和 history 两个库将 react-router 与 redux 进行深度整合实现
    - https://github.com/ReactTraining/history#readme
- @rematch/core
    - 在redux的基础上再次封装的，不需要再声明action 等配置，数据流管理更简单
    - 官网链接： https://rematch.gitbook.io/handbook/
- @rematch/loading
    - 添加自动loading指示器effects到Rematch
    - github地址： https://github.com/rematch/rematch/tree/master/plugins/loading
- react-loadable
    - 高阶组件-拆分应用程序、分成不同的包，根据需要动态加载他们
    -github地址： https://github.com/jamiebuilds/react-loadable
- app/index.html 在app文件夹下创建index.html作为入口html文件
    贴上如下代码
    ```
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
    <!-- 项目将被挂在带root上 -->
    <div id="root"></div>
    </body>
    </html>
    ```
- app/index.js 在app文件夹下创建index.js 作为应用的根组件
    贴上如下代码
    ```
    import React, {Component} from 'react';
    import ReactDOM from 'react-dom';
    import PropTypes from 'prop-types';

    class App extends Component {
        render() {
            return (
                    <div>
                        Hello React!
                    </div>
            )

        }
    }

    /**
     * 1、获取应用的根dom节点
     * 2、通过reactDOM渲染到真实的dom节点上
     */
    const rootEl = document.getElementById('root');
    ReactDOM.render(<App />, rootEl);

    ```
### 配置开发环境-用来启动应用程序
- 在package.json中的scripts字段下添加如下命令
    ```
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config ./scripts/pack.dev.js"
    ```
- 脚本解读
    - npm 会寻找 当前目录下的 package.json 中的 scripts 字段的 dev 字段;
    - 执行dev对应的字段值
        - 使用cross-env为当前的node进程加一个自定义变量:NODE_ENV,这个变量值为:development, (webpack会读这个变量);
        - 使用 webpack-dev-server 启动服务, 指定配置文件为: pack.dev.js


### 配置生产环境-用来启动应用程序
- 在package.json中的scripts字段下添加如下命令
    ```
    "build": "cross-env NODE_ENV=production webpack --config ./scripts/pack.build.js"
    ```
- 脚本解读
    - npm 会寻找 当前目录下的 package.json 中的 scripts 字段的 build 字段;
    - 执行build对应的字段值
        - 使用cross-env为当前的node进程加一个自定义变量:NODE_ENV,这个变量值为:production, (webpack会读这个变量);
        - 指定配置文件为: pack.build.js
        - webpack会执行文件中的命令，打包生成build文件，
- 此时的/scripts/pack.build.js文件下的配置如下
    ```
    const path = require('path');
    const webpack = require('webpack');
    const HtmlWebPackPlugin = require('html-webpack-plugin');
    const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    const TerserPlugin = require('terser-webpack-plugin');
    const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

    /**
     * webpack 配置
     * https://webpack.js.org/configuration/#options
     */
    const buildConfig = {
        /**
         * 模式
         * https://webpack.js.org/concepts/mode/
         **/
        mode: 'production',

        /** ⽬目标环境
         * https://webpack.js.org/configuration/target/#target
         **/
        target: 'web',

        /**
         * 程序的⼊⼝
         * https://webpack.js.org/configuration/entry-context/#entry
         **/
        entry: path.join(__dirname, '../app/index.js'),

        /**
         * 启动开发服务 执行 npm run dev, 输出如下:
         **/
        output: {
            path: path.join(__dirname, '../build'),
            filename: '[name].js'
        },

        /**
         * 插件
         */
        plugins: [
            new HtmlWebPackPlugin({
                template: './app/index.html',
                filename: './index.html'
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: '[name].[hash].css',
                chunkFilename: '[id].[hash].css',
            })
        ],

        /**模块
         * https://webpack.js.org/configuration/module/
         * */
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    include: [path.join(__dirname, '../app')],
                    use: [
                        'babel-loader'
                    ]
                },
                {
                    test: /\.(sa|sc|le|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        // 注意：此处顺序不能颠倒，webpack是自下而上解析，上一个 loader 把处理结果交给下一个
                        // less-loader 将 less 转为 css,
                        // css-loader 将 css 转为 style,
                        // style-loader 将 style 转为 js字符串.最终通过style标签把样式插入到htmL中
                        {loader: "css-loader"},
                        {loader: 'less-loader'}
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

        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        ecma: 6,
                        compress: true,
                        output: {
                            comments: false,
                            beautify: false
                        }
                    }
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        }
    };
    module.exports = buildConfig;
    ```
### 生产环境下启动服务
在 build 文件夹下使用 [http-server](https://github.com/indexzero/http-server) 启动服务:
- cd react-iframe
- 注意这⾥里里是全局安装, react-iframe不依赖 http-server
- sudo npm i -g http-server
- cd build  进入文件
- http-server  在当前文件下启动服务
- 输出如下，每个人的端口号和每次的端口号可能不一样
    ```
    Starting up http-server, serving ./
    Available on:
    http://127.0.0.1:8081
    http://192.168.20.44:8081
    Hit CTRL-C to stop the server
    ```
### 分包压缩，打包优化
- 抽离 pack.dev.js 和 pack.build.js 中相同的配置
    - scripts/pack.base.js放共用配置，pack.build.js和pack.dev.js引用该共用配置
    - scripts/pack.dll.js放打包的引用文件执行脚本，运行npm run dll，生成dll静态文件，然后在pack.dev.js环境引用
- 优化 npm run dev 的速度和热更新
    - 主要依赖pack.dev.js完成
- 优化 npm run build 的速度和文件体积
    - 主要依赖压缩混淆等方法完成，生成生产环境的代码

### 命令行介绍
   - dev: 开发环境打包
   - build: 生产环境打包
   - lint: 检测代码是否符合规范
   - lint:fix: 一键修复eslint检测到的不符合规范的代码
   - dll:  打包生成dll静态文件，主要是打包一些第三方依赖的文件
   - clear: 清除打包生成的build文件
--------
参考文档

- babel中文官方推荐文档：https://babel.docschina.org/docs/en/
- babel中文： http://guoyongfeng.github.io/my-gitbook/intro.html

