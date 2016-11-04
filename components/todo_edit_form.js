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
        console.log(this.state.text)
    }

    handleSubmit(e){
        const {todo} = this.props;
        e.preventDefault();
        this.props.actions.saveEdited(todo.todoID, this.state.text);
     }
    render(){
        const { todo } = this.props
         return (
            <form style={{display: todo.editMode ? 'block' : 'none'}} onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" className="form-control edit_input" defaultValue={todo.text} onChange={this.handleChange.bind(this)}/>
                <button type="submit" className="btn btn-default">Save</button>
            </form>
        )
    }
}

export default EditForm;