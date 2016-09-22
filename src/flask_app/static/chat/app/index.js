import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import App from './containers/App'
import rootReducer from './reducers'
import { createStore, compose } from 'redux'

//import createStoreWithMiddleware from './store/create'

import DevTools from './containers/DevTools';
// 把多个 store 增强器从右到左来组合起来，依次执行
// 这个地方完全可以不用compose，演示一下compose的使用
//const enhancer = compose(
//  DevTools.instrument()
//);

//let store = createStore(rootReducer, enhancer)
//const store = createStore(rootReducer);
const store = configureStore();

let rootElement = document.getElementById('app');
render(
    <Provider store={store}>
        <div>
            <App />
            <DevTools />
        </div>
    </Provider>,
    rootElement
)