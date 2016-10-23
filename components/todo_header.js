import React, {Component} from 'react';
import TodoList from './todo_list';
import TodoInput from './todo_input';


class Header extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container">
                <div className="app_header">
                    <h1>TODO APP</h1>
                </div>
                 <TodoList/>
                 <TodoInput />
            </div>
        );
    }
}

export default Header;