import React,{Component} from 'react';
import {render} from 'react-dom';
import createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';


let logger = createLogger();

const store = createStore(
    reducers,
  applyMiddleware(logger)
);



import Wrapper from './components/todo_wrapper';


render(
    <Provider store={store}>
        <Wrapper />
    </Provider>,
    document.getElementById('app')
);
