import React from 'react';
import Wrapper from './todo_wrapper';
import { Provider } from 'react-redux';

const Root = ({ store }) => (
    <Provider store={store}>
        <Wrapper />
    </Provider>
)

export default Root; 