import React, {Component} from 'react';
import { connect } from 'react-redux';

class TodoList extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <div className="todo__list">TODO LIST</div>
                <ul className="list-group">
                {this.props.data.map((todo)=>{
                    return <li className="list-group-item" key={todo.todoID}>{todo.text}</li>
                })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.todoList
    }
}

export default connect(mapStateToProps)(TodoList);