/**
 * Created by vlad on 08.05.2019.
 */
import React,{Component} from 'react';
import Task from "./Task";

class TaskContainer extends Component{
    render(){
        const tasks = this.props.tasks.map( task => ( <Task
            description={task.description}
            done={task.done} id={task.id}
            key={task.id}
            onChange={this.props.onFinishing}
            onDelete={this.props.onDelete} /> )
        );
        return (
            <div>
                {tasks}
            </div>
        )
    }
}

export default TaskContainer