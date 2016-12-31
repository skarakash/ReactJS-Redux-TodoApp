import React, {Component} from 'react'
import { editMode, completeTodo,  deleteTodo} from '../actions/index'
import { connect } from 'react-redux'

class TodoItem extends Component {
    render(){
        const { todo } = this.props;
        const { deleteItem, completeItem, editModeOn } = this.props;
        return (
            <div  style={{display: todo.editMode ? 'none': 'block' }}>
                <span className="list-group-item"  style={{ textDecoration: todo.completed ? 'line-through': 'none' }}>{todo.text}</span>
                <button className="btn btn-success" onClick={() => deleteItem(todo.todoID)}>Delete</button>
                <button className="btn btn-success" onClick={() => completeItem(todo.todoID)}>{todo.completed ? 'Reopen': 'Complete'}</button>
                <button className="btn btn-success" onClick={() => editModeOn(todo.todoID)}>Edit</button>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
        editModeOn(id) {
            dispatch(editMode(id))
        },
        completeItem(id) {
            dispatch(completeTodo(id))
        },
        deleteItem(id) {
            dispatch(deleteTodo(id))
        }
})
export default connect(null, mapDispatchToProps)(TodoItem);