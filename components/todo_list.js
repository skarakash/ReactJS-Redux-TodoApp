import React, {Component} from 'react';

class TodoList extends Component{
    constructor(){
        super();
    }

    handleClick(data){
        this.props.actions.deleteTodo(data);
    }

    render(){
        return (
            <div>
                <div className="todo__list">TODO LIST</div>
                <ul className="list-group">
                    {this.props.data.map((todo) => {
                        return (
                            <li className="list-group-item" key={todo.todoID}>
                                <span className="badge" data={todo} onClick={this.handleClick.bind(this, todo.todoID)}>Delete</span>
                                {todo.text}
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;