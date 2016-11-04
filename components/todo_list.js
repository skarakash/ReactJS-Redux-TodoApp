import React, {Component} from 'react'
import EditForm from './todo_edit_form'

class TodoList extends Component{
    render(){
        const { data } = this.props;
         return (
            <div>
                <div className="todo__list">TODO LIST</div>
                    <div className="list-group">
                        { data.map((todo)=> {
                            return (
                                <div key={todo.todoID}>
                                    <EditForm  todo={todo} actions={this.props.actions}/>
                                    <div  style={{display: todo.editMode ? 'none': 'block' }}>
                                        <span className="list-group-item"  style={{ textDecoration: todo.completed ? 'line-through': 'none' }} >{todo.text}</span>
                                        <button className="btn btn-success" onClick={() => this.props.actions.deleteTodo(todo.todoID)}>Delete</button>
                                        <button className="btn btn-success" onClick={() => this.props.actions.completeTodo(todo.todoID)}>{todo.completed ? 'Reopen': 'Complete'}</button>
                                        <button className="btn btn-success" onClick={() => this.props.actions.editMode(todo.todoID)}>Edit</button>
                                    </div>
                                </div>
                            );
                        })}
                        
                    </div>
            </div>
        )
    }
}

export default TodoList;