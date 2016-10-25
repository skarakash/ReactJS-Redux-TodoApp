import React, {Component} from 'react';

class TodoList extends Component{
    render(){
         return (
            <div>
                <div className="todo__list">TODO LIST</div>
                    <div className="list-group">
                        {this.props.data.map((todo)=> {
                            return (
                                <div key={todo.todoID}>
                                    <span className="list-group-item"  style={{ color: todo.completed ? 'blue': 'red' }} >{todo.text}</span>
                                    <button className="btn btn-success" onClick={() => this.props.actions.deleteTodo(todo.todoID)}>Delete</button>
                                    <button className="btn btn-success" onClick={() => this.props.actions.completeTodo(todo.todoID)}>{todo.completed ? 'Reopen': 'Complete'}</button>
                                </div>
                            );
                        })}
                    </div>
            </div>
        )
    }
}

export default TodoList;