/**
 * Created by vlad on 08.05.2019.
 */
import React,{Component} from 'react';
import Task from "./Task";

class TaskContainer extends Component{

    render(){

        const sortedTasks = this.props.sortType === "byAlphabet" ? [...this.props.tasks].sort(sortByAlphabet) : this.props.tasks;
        const filteredTasks = this.props.filterText
                                ? sortedTasks.filter( task => task.description.toLowerCase().includes(this.props.filterText.toLowerCase() ))
                                : sortedTasks;
        const tasks = filteredTasks.map( task => ( <Task
                description={task.description}
                done={task.done} id={task.id}
                key={task.id}
                onChange={this.props.onFinishing}
                onDelete={this.props.onDelete} /> )
            );

        return (
            <div className="task-container">
                { tasks }
            </div>
        )
    }
}

function sortByTime(a, b) {
    const c = new Date(a.date);
    const d = new Date(b.date);
    return c - d;
}
function sortByAlphabet(a, b) {
    if (a.description.toLowerCase() < b.description.toLowerCase())  return -1;
    if (a.description.toLowerCase() > b.description.toLowerCase())  return 1;
    return 0;
}
function filter( textSample ){

}


export default TaskContainer