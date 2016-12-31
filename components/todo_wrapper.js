import React, {Component} from 'react'
import TodoList from './todo_list'
import TodoInput from './todo_input'
import { connect } from 'react-redux'



class Wrapper extends Component {
    constructor(){
        super();
    }
    render(){
        const { todos } = this.props;
        return(
            <div className="container">
                <div className="app_header">
                    <h1>TODO APP</h1>
                </div>
                 <TodoList data={ todos }/>
                 <TodoInput />
            </div>
        );
    }
}

const mapStateToProps = state => ({ 
    todos: state.todoList
});

export default connect (mapStateToProps)(Wrapper);
