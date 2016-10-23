import { ADD_TODO } from '../constants/index';


const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text: text
    }
}

export default addTodo;