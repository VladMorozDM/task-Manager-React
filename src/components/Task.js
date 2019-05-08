/**
 * Created by vlad on 07.05.2019.
 */
import React,{Component} from 'react';


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
        return (<div className={ this.props.done ? "task done" : "task in-progress" }>
            <form >
                <input type="checkBox" checked={this.props.done} onChange={this.handleChange}/>
                <p>{this.props.description || "Description"}</p>
                <input type="button" value="delete" onClick={this.handleClick}/>
            </form>
        </div>)
    }
}

export default Task;
