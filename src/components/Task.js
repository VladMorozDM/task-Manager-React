/**
 * Created by vlad on 07.05.2019.
 */
import React,{Component} from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

class Task extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleClick(){
        this.props.onDelete( this.props.id )
    }
    handleChange(){
        this.props.onChange(this.props.id);
    }
    render(){
        const date = new Date(this.props.date);
        return (<div className={ this.props.done ? "task done" : "task in-progress" }>
            <small>
                {monthNames[date.getMonth()] + " " + date.getDate()}
            </small>
            <form >
                <input type="checkBox" checked={this.props.done} onChange={this.handleChange}/>
                <p className="description">{this.props.description || "Description"}</p>
                <input type="button" value="delete" onClick={this.handleClick}/>
            </form>
        </div>)
    }
}

export default Task;
