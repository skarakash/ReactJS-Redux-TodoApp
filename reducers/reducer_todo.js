import { ADD_TODO } from '../constants/index'

let todoID = 0;
const INITIAL_STATE = [{
    text: 'Create an ToDo List',
    completed:true,
    todoID: todoID++
}]

const todoApp = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
             return [{
                    text: action.text, 
                    todoID:todoID++,
                    completed:false}, 
                        ...state ]
        default:
            return state;
    }
}

export default todoApp;