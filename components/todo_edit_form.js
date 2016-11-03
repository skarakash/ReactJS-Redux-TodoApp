import React, {Component} from 'react';

class EditForm extends Component{
    render(){
        const { todo } = this.props
         return (
            <form style={{display: todo.editMode ? 'block' : 'none'}}>
                <input type="text" className="form-control edit_input" defaultValue={todo.text}/>
                <button type="submit" className="btn btn-default">Save</button>
            </form>
        )
    }
}

export default EditForm;