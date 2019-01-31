import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { BasicLayout, BlankLayout } from './layouts';

const Loading = () => (
    <span>Loading...</span>
);

//Loadable是一个高级组件，用来懒加载各个模块的组件
const lazy = Name => Loadable({
    loader: () => import(`./pages/${Name}`),
    loading: Loading
});

// 无状态组件，函数式组件定义方式，返回的是路由包裹的各个组件
const RouteWithLayout = ({ layout: BasicLayout, component: Component, ...rest }) => { // eslint-disable-line
    return (
        <Route {...rest} render={props => (
            <BasicLayout>
                <Component {...props} />;
            </BasicLayout>
        )} />
    );
};

const blankRoutes = [
    {
        path: '/login',
        exact: false,
        component: 'login'
    }
];

const basicRoutes = [
    {
        path: '/',
        exact: true,
        component: 'home'
    },
    {
        path: '/counter',
        exact: false,
        component: 'counter'
    }
];

// 把路由和组件绑定起来，返回给应用程序用，并实现懒加载，按需加载
export default (
    <Switch>
        {basicRoutes.map(item => (
            <RouteWithLayout
                key={item.path}
                layout={BasicLayout}
                exact={item.exact}
                path={item.path}
                component={lazy(item.component)}
            />
        ))}
        {blankRoutes.map(item => (
            <RouteWithLayout
                key={item.path}
                layout={BlankLayout}
                exact={item.exact}
                path={item.path}
                component={lazy(item.component)}
            />
        ))}

    </Switch>
);
