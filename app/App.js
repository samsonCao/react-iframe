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
            //    高阶组件，将redux中的store数据和当前项目绑定在一起,每个子组价都可以通过connect获取到store中的数据
            <Provider store={store}>
                {/*把浏览器路由和react绑定在一起*/}
                <ConnectedRouter history={history}>
                    {routes}
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
