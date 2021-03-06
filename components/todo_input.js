import React, {Component} from 'react';
import { connect } from 'react-redux';
import  { addTodo }  from '../actions/index';

class TodoInput extends Component{
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }

    handleInputChage(e){
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e){
        const { addItem } = this.props;
        e.preventDefault();
        if (this.state.text == ''){
            return;
        }
        addItem(this.state.text);
        this.setState({text: ''});
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Add a Todo</label>
                    <input type="text" className="form-control" placeholder="Enter a todo" value={this.state.text} onChange={this.handleInputChage.bind(this)}/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
        addItem(text){
            dispatch(addTodo(text))
        }
})
export default connect(null, mapDispatchToProps)(TodoInput);