import React from 'react';
import Wrapper from './todo_wrapper';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'

const Root = ({ store }) => (
    <Provider store={store}>
        <Wrapper />
    </Provider>
)

export default Root; 