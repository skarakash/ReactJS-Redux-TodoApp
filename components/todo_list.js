import React, {Component} from 'react'
import EditForm from './todo_edit_form'
import TodoItem from './todo_item'

class TodoList extends Component{
    render(){
        const { data } = this.props;
         return (
            <div>
                <div className="todo__list">TODO LIST</div>
                    <div className="list-group">
                        { data.map( todo => {
                            return (
                                <div key={todo.todoID}>
                                    <EditForm  todo={todo} />
                                    <TodoItem  todo={todo} />
                                </div>
                            );
                        })}
                    </div>
            </div>
        )
    }
}

export default TodoList;