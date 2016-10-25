import React, {Component} from 'react';
import TodoList from './todo_list';
import TodoInput from './todo_input';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/index'


class Wrapper extends Component {
    constructor(){
        super();
    }
    render(){
        //console.log(this.props.actions)
        return(
            <div className="container">
                <div className="app_header">
                    <h1>TODO APP</h1>
                </div>
                 <TodoList data={this.props.data.todoList} actions={this.props.actions}/>
                 <TodoInput actions={this.props.actions}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {data: state}
};

const mapDispatchToProps = (dispatch) => {
    
    return { 
        actions: bindActionCreators(actionCreators, dispatch) 
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Wrapper);