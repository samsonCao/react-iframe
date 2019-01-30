import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { BasicLayout, BlankLayout } from './layouts';

const Loading = () => (
    <span>Loading...</span>
);

const lazy = Name => Loadable({
    loader: () => import(`./pages/${Name}`),
    loading: Loading
});

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
