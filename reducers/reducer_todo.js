import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../constants/index'


let todoID = 0;
const INITIAL_STATE = [{
    text: 'Create an ToDo List',
    completed:true,
    todoID: todoID
}]


const todoApp = (state = INITIAL_STATE, action, newstate) => {
    switch (action.type) {
        case ADD_TODO:
             return [{
                    text: action.text, 
                    todoID: state.length = 0 ? todoID : state.length,
                    completed:false}, 
                        ...state ]
        case DELETE_TODO:
            return newstate = state.filter((obj) => {
                return obj.todoID !== action.todoID
            }) 
        case COMPLETE_TODO:
            return  newstate = state.map((obj)=> {
                if (obj.todoID == action.todoID) {
                    return Object.assign({}, obj, obj.completed = !obj.completed)
                } else {
                    return obj
                }
            })          
        default:
            return state;
    }
}

export default todoApp;


