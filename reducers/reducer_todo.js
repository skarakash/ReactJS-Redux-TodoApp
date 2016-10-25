import { ADD_TODO, DELETE_TODO } from '../constants/index'

let todoID = 0;
const INITIAL_STATE = [{
    text: 'Create an ToDo List',
    completed:true,
    todoID: todoID++
}]

const todoApp = (state = INITIAL_STATE, action, newstate) => {
    switch (action.type) {
        case ADD_TODO:
             return [{
                    text: action.text, 
                    todoID:todoID++,
                    completed:false}, 
                        ...state ]
        case DELETE_TODO:
            return newstate = state.filter((obj) => {
                return obj.todoID !== action.todoID
            })                 
        default:
            return state;
    }
}

export default todoApp;


