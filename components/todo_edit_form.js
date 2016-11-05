import React, {Component} from 'react';

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
        const { saveEdited } = this.props.actions;
        if (this.state.text == ''){
            return;
        }
        e.preventDefault();
        saveEdited(todo.todoID, this.state.text);
     }
    render(){
        const { todo } = this.props
        const { cancelEdit } = this.props.actions;
         return (
            <form style={{display: todo.editMode ? 'block' : 'none'}} onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" className="form-control edit_input" defaultValue={todo.text} onChange={this.handleChange.bind(this)}/>
                <button type="submit" className="btn btn-default save_button">Save</button>
                <button  type="reset" className="btn btn-default" onClick={() => cancelEdit(todo.todoID)}>Cancel</button>
            </form>
        )
    }
}

export default EditForm;