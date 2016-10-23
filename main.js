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



import Header from './components/todo_header';


render(
    <Provider store={store}>
        <Header/>
    </Provider>,
    document.getElementById('app')
);
