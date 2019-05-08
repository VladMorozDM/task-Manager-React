import React, { Component } from 'react';

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
           descriptionValue: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log("changing desc", this.state);
        const { name, value } = event.target;
        this.setState( prevState => ({ [name]: value }))
    }
    handleClick(event){
        console.log("adding", this.state);
        const newTask = {
            id: this.props.lastId,
            description: this.state.descriptionValue,
            done: false
        };
        this.props.onAdding( newTask );
    }
    render() {
        return (
            <div className="task-form">
                <input type="text" name="descriptionValue" placeholder="Describe your task" onChange={this.handleChange}/>
                <input type="button" value="Add new Task" onClick={this.handleClick}/>
            </div>)
    }
}
export default TaskForm;
