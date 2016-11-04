import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_MODE, SAVE_EDITED } from '../constants/index'


let todoID = 0;
const INITIAL_STATE = [{
    text: 'Create an ToDo List',
    completed:true,
    todoID: todoID,
    editMode: false
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
            return newstate = state.filter(obj => {
                return obj.todoID !== action.todoID
            }); 

        case COMPLETE_TODO:
            return  newstate = state.map(obj => {
                if (obj.todoID == action.todoID) {
                    return Object.assign({}, obj, {completed: !obj.completed})
                } else {
                    return obj
                }
            });  

        case EDIT_MODE:
            return newstate = state.map(obj => {
                if(obj.todoID == action.todoID){
                    return Object.assign({}, obj, {editMode: true})
                } else {
                    return obj
                }
            });
            
        case SAVE_EDITED:
            return newstate = state.map(obj => {
                if (obj.todoID == action.todoID) {
                    return Object.assign({}, obj, { editMode: false, text: action.text})
                } else {
                    return obj
                }
            })
        default:
            return state;
    }
}

export default todoApp;


