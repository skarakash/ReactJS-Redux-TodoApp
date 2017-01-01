import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, EDIT_MODE, SAVE_EDITED, CANCEL_EDIT } from '../constants/index'
import { v4 } from 'node-uuid'

const todoApp = (state = [], action, newstate) => {
    switch (action.type) {
        case ADD_TODO:
             return [{
                    text: action.text,
                    todoID: v4(),
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
        case CANCEL_EDIT:
            return newstate = state.map(obj => {
                if (obj.todoID == action.todoID) {
                    return Object.assign({}, obj, { editMode: false })
                } else {
                    return obj
                }
            })
        default:
            return state;
    }
}

export default todoApp;


