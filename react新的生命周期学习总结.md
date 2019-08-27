**生命周期综述**
--------
组件生命周期就是用来描述组件的,此处只介绍v16.5.2中官方推荐用的生命周期，不推荐用的或者即将废弃的不做介绍。

React将组件看成是一个有生命的个体，因此为其赋予了生命周期概念

共分三大周期，9个方法。

本文按照react生命周期执行顺序介绍。

创建期的render、static getDerivedStateFromProps

存在期的render、static getDerivedStateFromProps两个生命周期是会多次调用的，虽然是相同的生命周期但是是不同的执行目的。

- 创建期（描述组件创建的过程，刚出生，成长的过程），执行四个方法
    - constructor()
    - static getDerivedStateFromProps()
    - render()
    - componentDidMount()
- 存在期（描述组件更新的过程，成年后，持续重复的工作），执行五个方法
    - static getDerivedStateFromProps()
    - shouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpdate()
    - componentDidUpdate()
    -
- 销毁期（描述组件销毁的过程，进入老年），执行一个方法
    - componentWillUnmount()

- 错误处理(捕获组件中的异常，可以抛给服务端错误日志，但是不用来解决异常)
    - componentDidCatch()

**生命周期一览图**

![全量](https://github.com/samsonCao/react-iframe/blob/master/public/images/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%85%A8%E9%87%8F.png)

![常用](https://github.com/samsonCao/react-iframe/blob/master/public/images/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%B8%B8%E7%94%A8.png)

**constructor**
--------
1.constructor含参数props。 constructor是构造方法，也是ES6对类的默认方法。

2.如果你用到了constructor就必须写super(),是用来初始化this的，可以绑定事件到this上。

3.通过super继承Component组件的方法。如果你在constructor中要使用this.props,就必须给super加参数：super(props)。

4.无论有没constructor，在render中this.props都是可以使用的，这是React自动附带的。

5.调用super(props)，用来将父组件传来的props绑定到这个类中，使用this.props将会得到。

6.如果没用到constructor,是可以不写的；React会默认添加一个空的constructor。


```javascript
constructor(props) {
        console.log(props,'props执行了')
        super(props);
        // Don't call this.setState() here!
        this.state = {
            counter: 0
        };
        //绑定事件到this上
        // this.handleCountAdd = this.handleCountAdd.bind(this);
    }
```
![constructor](https://github.com/samsonCao/react-iframe/blob/master/public/images/constructor.png)


**getDerivedStateFromProps**
--------
static表示是静态的方法，此方法无法通过this访问组件实例 this是undefined


三种情况下会调用此方法
- 在组件实例化后被调用(组件初始化constructor执行后)
- 从父组件接受新的props后被调用
- 组件在其它地方执行this.setState后被调用

两个参数
- 参数1是父组件传入的属性数据
- 参数2是组件自身维护的状态数据

比较nextProps和prevState,如果两个值不同，返回一个对象用来更新state；如果两个值相同，返回null,表示不需要更新state.

返回对象时调用componentDidUpdate，可以执行对应的操作

禁止在此处调用能执行方法体内含有this.setState的方法。如果nextProps.counter 下的属性是undefined 回有异常(组件无法渲染出数据),所以要先判断.

```javascript
static getDerivedStateFromProps(nextProps, prevState) {
        console.log(this, nextProps, prevState, 'getDerivedStateFromProps执行了');
        if (nextProps.counter !== undefined && nextProps.counter !== prevState.counter) {
            return {
                counter: nextProps.counter
            };
        }
        return null;
    }
```
![getDerivedStateFromProps](https://github.com/samsonCao/react-iframe/blob/master/public/images/getDerived.png)

**render**
--------

```javascript
render() {
        console.log('render执行了')

        return <div className="blogPage" onClick={this.handleCountAdd}>{this.state.counter}</div>;
    }
```

**componentDidMount**
--------
此方法无参数，会在第一次render后执行。this是组件实例化对象

一般在该生命周期中执行ajax请求获取数据执行this.setState()

```javascript
componentDidMount() {
        console.log(this, arguments, 'componentDidMount执行了')
        this.setState({
            counter: 1
        })
    }
```
![didMount](https://github.com/samsonCao/react-iframe/blob/master/public/images/didMount.png)

![didMount2](https://github.com/samsonCao/react-iframe/blob/master/public/images/didMount2.png)

- 如果componentDidMount执行了this.setState()
   - 组件会先执行static getDerivedStateFromProps()
   - 再执行shouldComponentUpdate()
   - 然后执行render 重新渲染页面
  ![didMount3](https://github.com/samsonCao/react-iframe/blob/master/public/images/didMount3.png)

**shouldComponentUpdate**
--------
* 三个参数
    * 第一个参数表示新的属性数据
    * 第二个参数表示新的状态数据
    * 第三个参数控制台输出是空对象{} 暂时不知道干什么用-有兴趣可以研究一下

* 作用域this上的属性数据和状态数据都是旧的。如this.state.counter是更新前的 newState.state是更新后的
* 必须有返回值
* True表示可以更新-之后会执行render
* False表示不能更新-如果state里面的数据变化，但是该声明周期返回false不会执行render
* 通常比较属性数据和状态数据是否变化了，比较参数中的与实例化对象中数据是否变化
* 主要目的就是为了组件更新优化的
```javascript
shouldComponentUpdate(newProps, newState) {
        console.log(this, arguments, newProps, newState,'shouldComponentUpdate执行了');
        console.log(newState.counter, this.state.counter,'对比')

        //true会更新  false不会更新
        return newState.counter !== this.state.counter;
    }
```
![alt](https://github.com/samsonCao/react-iframe/blob/master/public/images/shouldUpdate.png)

**getSnapshotBeforeUpdate**
--------
* 此方法是用来替换componentWillUpdate的
* componentWillUpdate的常见用法是，在更新之前读取 DOM 状态，之后更新后 componentDidUpdate
再次获取的 DOM 状态进行必要的处理。
* 异步渲染的到来，使得 componentWillUpdate的触发时机（它在异步渲染被取缔，但此处我们假想它仍然存在）与 componentDidUpdate
     的触发时机间隔较大，因为异步渲染随时可能暂缓这一组件的更新。这样一来，之前的做法将变得不够稳定，因为这间隔久到 DOM 可能因为用户行为发生了变化。
* 例如：对于异步渲染，“render”阶段生命周期（如componentWillUpdate和render）与componentDidUpdate之间可能存在延迟。如果用户在这段时间内做了类似调整窗口大小的操作，则从componentWillUpdate中读取的scrollHeight值将失效。解决此问题的方法是使用新的“commit”阶段生命周期getSnapshotBeforeUpdate。在数据发生变化之前立即调用该方法（例如，在更新DOM之前）。它可以将React的值作为参数传递给componentDidUpdate，在数据发生变化后立即调用它。
* 为此，React 提供了 getSnapshotBeforeUpdate。它的触发时机是 React 进行修改前（通常是更新 DOM）的“瞬间” ，这样一来在此获取到的 DOM 信息甚至比 componentWillUpdate更加可靠。此外，它的返回值会作为第三个参数传入 componentDidUpdate，这样做的好处很明显——开发者可以不必将为了协调渲染前后状态之用而产生的数据保存在组件实例上，用完即可销毁。
* 两个参数
    * prevProps上一次的属性数据
    * prevState上一次的状态数据
* return的返回值作为componentDidUpdate的第三个参数例如: return this.state.counter 是componentDidUpdate的第三个参数

案例：对比上一次的状态数据counter和当前this.state.counter 满足条件时返回当前的状态数据counter,
这个返回值作为componentDidUpdate的第三个参数用。不调用此方法时，componentDidUpdate第三个参数是undefined

```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(this, arguments, prevProps, prevState,'getSnapshotBeforeUpdate执行了')
        if (prevState.counter < this.state.counter) {
            return this.state.counter
        }
        return null;
    }
```

![getSnapshotBeforeUpdate](https://github.com/samsonCao/react-iframe/blob/master/public/images/beforeUpdate.png)


**componentDidUpdate**
--------
* 三个参数或者两个参数
    * prevProps上一次的属性数据
    * prevState上一次的状态数据
    * arguments3 getSnapshotBeforeUpdate执行后return的数据 不执行时无此参数
*  this是组件实例化对象
* 作用域上的属性数据和状态数据是新的了，虚拟DOM也是新的了
     - 因此我们可以在这个阶段，访问新的属性数据，新的状态数据，新的虚拟DOM树，以及旧的属性数据，旧的状态数据
     - 这个阶段执行完毕，预示着一次更新的结束，但是存在期并没有结束
     - 如果检测到arguments3 !== null 说明在render更新前的一瞬间state发生了变化，此时就需要再次render
     - 以保证数据状态和视图同步，此时就需要在该生命周期中执行this.setState执行新一轮的render


```javascript
componentDidUpdate(prevProps, prevState, counter) {
        console.log(this, prevProps, prevState, counter, 'componentDidUpdate执行了')
        // if (counter !== null) {
        //     this.setState({
        //         counter: counter
        //     })
        // }
    }
```

![componentDidUpdate](https://github.com/samsonCao/react-iframe/blob/master/public/images/didUpdate.png)

**componentWillUnmount**
--------
- 一旦组件从页面中（容器元素中）移除，组件将进入销毁期
     - 销毁期只有一个阶段componentWillUnmount：组件即将销毁
     - 没有参数
     - 作用域是组件实例化对象
     - 是组件一生中执行的最后一个方法了，执行完毕组件就销毁了
     - 在此方法中执行任何必要的清理，例如使定时器无效，取消网络请求或清理在componentDidMount（）中创建的任何监听。


```javascript
 componentWillUnmount(){
        //例如在其他地方定义的定时器，可以在该组件中清除
        // let timer = setTimeout(function () {
        //
        // }, 200)

        // clearInterval(timer)
    }
```

**componentDidCatch**
--------
- 错误边界是React组件，可以在其子组件树中的任何位置捕获JavaScript错误，记录这些错误并显示回退UI，而不是崩溃的组件树。
错误边界在渲染期间，生命周期方法以及整个树下的构造函数中捕获错误。
     - 如果类组件定义了此生命周期方法，则它将成为错误边界。
     在它中调用setState()可以让你在下面的树中捕获未处理的JavaScript错误，并显示一个后备UI。
     只能使用错误边界从意外异常中恢复;不要试图将它们用于控制流程。详细错误边界只会捕获树中下面组件中的错误。错误边界本身不能解决错误。


```javascript
componentDidCatch(error, info) {
        console.log(this, arguments, error, info, 'componentDidCatch执行了')
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }
```

**完整代码**
--------

```javascript
import React, {Component} from 'react';
import propTypes from 'prop-types';

import {connect} from 'react-redux';

@connect((state) => ({
    blogs: state.common.blogs,
}))
export default class Blog extends Component {

    constructor(props) {
        console.log(props,'props执行了')
        super(props);
        // Don't call this.setState() here!
        this.state = {
            counter: 0
        };

        //点击事件写法2
        // this.handleCountAdd = this.handleCountAdd.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(this, nextProps, prevState, 'getDerivedStateFromProps执行了');
        if (nextProps.counter !== undefined && nextProps.counter !== prevState.counter) {
            return {
                counter: nextProps.counter
            };
        }
        return null;
    }


    componentDidMount() {
        console.log(this, arguments, 'componentDidMount执行了')
        this.setState({
            counter: 1
        })
    }

    /**
     * 如果componentDidMount执行了this.setState()
     * 组件会先执行static getDerivedStateFromProps()
     * 再执行shouldComponentUpdate()
     * 然后执行render 重新渲染页面
     * */



    shouldComponentUpdate(newProps, newState) {
        console.log(this, arguments, newProps, newState,'shouldComponentUpdate执行了');
        console.log(newState.counter, this.state.counter,'对比')

        //true会更新  false不会更新
        return newState.counter !== this.state.counter;
    }


    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(this, arguments, prevProps, prevState,'getSnapshotBeforeUpdate执行了')
        if (prevState.counter < this.state.counter) {
            return this.state.counter
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, counter) {
        console.log(this, prevProps, prevState, counter, 'componentDidUpdate执行了')
        // if (counter !== null) {
        //     this.setState({
        //         counter: counter
        //     })
        // }
    }


    componentWillUnmount(){
        //例如在其他地方定义的定时器，可以在该组件中清除
        // let timer = setTimeout(function () {
        //
        // }, 200)

        // clearInterval(timer)
    }

    componentDidCatch(error, info) {
        console.log(this, arguments, error, info, 'componentDidCatch执行了')
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    //点击事件写法2
    // handleCountAdd() {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }

    //点击事件写法1
    handleCountAdd = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        console.log('render执行了')

        //点击事件写法1
        return <div className="blogPage" onClick={this.handleCountAdd}>{this.state.counter}</div>;

        // 点击事件写法2
        // return <div className="blogPage" onClick={this.handleCountAdd}>{this.state.counter}</div>;
    }
}

Blog.propTypes = {
    blogs: propTypes.array,
    routeParams: propTypes.object,
};

```

文中有不严谨或者不正确的地方欢迎指正修改，感谢阅读。







