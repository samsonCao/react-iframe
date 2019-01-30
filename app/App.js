import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';  // 用于支持HTML5历史记录API的现代Web浏览器（请参阅跨浏览器兼容性）
import './global.scss';
import createStore from './store';
import models from './models';
import routes from './routes';

const history = createHistory();
const store = createStore(models);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    {routes}
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
