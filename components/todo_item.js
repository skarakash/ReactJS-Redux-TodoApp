import React, {Component} from 'react'

class TodoItem extends Component {
    render(){
        const { todo } = this.props;
        const { deleteTodo, completeTodo, editMode } = this.props.actions;
        return (
            <div  style={{display: todo.editMode ? 'none': 'block' }}>
                <span className="list-group-item"  style={{ textDecoration: todo.completed ? 'line-through': 'none' }}>{todo.text}</span>
                <button className="btn btn-success" onClick={() => deleteTodo(todo.todoID)}>Delete</button>
                <button className="btn btn-success" onClick={() => completeTodo(todo.todoID)}>{todo.completed ? 'Reopen': 'Complete'}</button>
                <button className="btn btn-success" onClick={() => editMode(todo.todoID)}>Edit</button>
            </div>
        )
    }
}

export default TodoItem