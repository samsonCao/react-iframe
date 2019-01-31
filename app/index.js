import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//读取根dom节点root,把应用程序绑定在根节点root上
const mountEl = document.getElementById('root');
ReactDOM.render(<App />, mountEl);
