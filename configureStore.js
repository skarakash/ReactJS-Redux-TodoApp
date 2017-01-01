import createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';




const configureStore = () => {
    let logger = createLogger();

    const store = createStore(
        reducers,
    applyMiddleware(logger)
    );

    return store;
}

export default configureStore;