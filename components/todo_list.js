import React, {Component} from 'react';

class TodoList extends Component{
    constructor(){
        super();
    }

    handleClick(e){
        e.preventDefault();
        console.log(this.props)
    }

    render(){
        return (
            <div>
                <div className="todo__list">TODO LIST</div>
                <ul className="list-group">
                    {this.props.data.map((todo) => {
                        return (
                            <li className="list-group-item" key={todo.todoID}>
                                <span className="badge" onClick={this.handleClick.bind(this)}>Delete</span>
                                {todo.text}
                            </li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default TodoList;