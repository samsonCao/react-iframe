###### 南极智云项目技术栈介绍

这是一个基于React的PC端中后台管理系统
- 使用了React核心库，提供了全局变量React,包含生成虚拟dom的函数react.createElement,以及Component类等基础配置
- 使用react-dom把虚拟dom渲染到文中变成真实dom
- 使用react-router-dom把react的路由和dom绑定起来，实现路由的核心功能
- 使用react-redux连接组件和数据，把react和redux连接起来
- 使用connected-react-router和history一起，将路由状态和redux存储同步起来，将 react-router 与 redux 进行深度整合实现
- 使用@rematch/core让数据流管理变的简单清晰(在redux的基础上再次封装的，不需要再声明action 等配置)
- 使用react-loadable高阶组件拆分项目文件，分成不同的包，根据需要动态加载
- 使用prop-types对传入的属性数据做类型校验
- 使用antd-design作为UI展现层的基础组件，并在此基础上封装项目需要的业务组件和UI组件。本框架用的是alifid/next，alifid是阿里开源的比antd-design轻量的UI库。
- 使用classnames控制class类名状态
- 使用axios处理ajax请求，实现前后端的交互
- 使用wangeditor完成富文本编辑
- 使用moment处理时间日期等格式
- 使用numbro格式化数字金额
- 使用echarts处理页面的图表信息
- 使用lodash处理一些数据
- 用less编写样式文件
- 使用cross-env配置跨平台的开发环境和生产环境
- 用eslint检测js代码是否符合规范
- 用stylelint检测css代码样式书写是否符合规范
- 使用webpack4和相关配置处理ES6语法、JSX语法、
- 使用webpack-dev-server在开发环境实现热更新和打包服务
- 使用jest库进行单元测试，使用puppeteer模拟浏览器做自动化集成测试
- 使用plop通过命令行的方式生成一些模板代码
