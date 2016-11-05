import { combineReducers } from 'redux';
import todoList from './reducer_todo';
import { reducer as fromReducer } from 'redux-form';

const todoApp = combineReducers({
    todoList: todoList,
    form: fromReducer
})

export default todoApp;