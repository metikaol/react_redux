import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory'
import { connectRouter, ConnectedRouter } from 'connected-react-router'
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { apiMiddleware } from 'redux-api-middleware'
const middlewares = [thunk, apiMiddleware, logger]

// const history = createHistory()
const store = createStore(rootReducer, applyMiddleware(...middlewares))
// const store = createStore(connectRouter(history)(rootReducer), applyMiddleware(...middlewares))

const MainApp = () => (
    <Provider store={store}>
        {/* <ConnectedRouter history={history}> */}
            <div>
                <App />
            </div>
        {/* </ConnectedRouter> */}
    </Provider>
  )

ReactDOM.render(<MainApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

