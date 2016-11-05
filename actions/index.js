import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_MODE, SAVE_EDITED, CANCEL_EDIT } from '../constants/index';


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

export const saveEdited = (id, text) => {
    return {
        type: SAVE_EDITED,
        todoID: id,
        text: text
    }
}

export const cancelEdit = (id) => {
    return {
        type: SAVE_EDITED,
        todoID: id
    }
}