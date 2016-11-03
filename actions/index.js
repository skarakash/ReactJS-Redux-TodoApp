import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_MODE } from '../constants/index';


export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text: text
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        todoID: id
    }
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        todoID: id
    }
}

export const editMode = (id) => {
    return {
        type: EDIT_MODE,
        todoID: id
    }
}