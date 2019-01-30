import { init } from '@rematch/core';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createLoadingPlugin from '@rematch/loading';
import createHistory from 'history/createBrowserHistory';

const options = {};
const loading = createLoadingPlugin(options);

export const history = createHistory();

const reducers = { router: connectRouter(history) };

/**
 * 基于 Rematch 实现的 Redux 最佳实践
 *
 * More: https://rematch.gitbook.io/handbook/
 */
export default (models) => init({
    redux: {
        reducers,
        middlewares: [
            routerMiddleware(history)
        ],
        devtoolOptions: {}
    },
    models,
    plugins: [
        loading
    ]
});
