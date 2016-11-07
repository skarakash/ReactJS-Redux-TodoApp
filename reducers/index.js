import { combineReducers } from 'redux';
import todoList from './reducer_todo';

const todoApp = combineReducers({
    todoList: todoList
})

export default todoApp;