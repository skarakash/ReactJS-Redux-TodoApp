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
        if (this.state.text == ''){
            return;
        }
        e.preventDefault();
        this.props.actions.saveEdited(todo.todoID, this.state.text);
     }
    render(){
        const { todo } = this.props
         return (
            <form style={{display: todo.editMode ? 'block' : 'none'}} onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" className="form-control edit_input" defaultValue={todo.text} onChange={this.handleChange.bind(this)}/>
                <button type="submit" className="btn btn-default save_button">Save</button>
                <button type="submit" className="btn btn-default" onClick={() => this.props.actions.cancelEdit(todo.todoID)}>Cancel</button>
            </form>
        )
    }
}

export default EditForm;