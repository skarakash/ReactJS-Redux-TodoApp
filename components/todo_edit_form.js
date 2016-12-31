import React, {Component} from 'react'
import { connect } from 'react-redux'
import { saveEdited, cancelEdit } from '../actions/index'


class EditForm extends Component{
    constructor(props){
        super(props);
        const {todo} = this.props;
        this.state = {
            text: todo.text
        }

    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            text: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const {todo} = this.props;
        const {saveAfterEdit } = this.props
        if (this.state.text == ''){
            return;
        }
        saveAfterEdit(todo.todoID, this.state.text);
     }

    handleClick(id){
        const {todo} = this.props;
        const { abortEdit } = this.props
        abortEdit(todo.todoID)
    }

    render(){
        const { todo } = this.props
         return (
            <form style={{display: todo.editMode ? 'block' : 'none'}} onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" className="form-control edit_input" defaultValue={todo.text} onChange={this.handleChange.bind(this)}/>
                <button type="submit" className="btn btn-default save_button">Save</button>
                <button  type="reset" className="btn btn-default" onClick={this.handleClick.bind(this, todo.todoID)}>Cancel</button>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    saveAfterEdit (id, text){
        dispatch(saveEdited(id, text))
    },
    abortEdit(id){
        dispatch(cancelEdit(id))
    }
});

export default connect(null, mapDispatchToProps)(EditForm);