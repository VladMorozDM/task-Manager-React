/**
 * Created by vlad on 08.05.2019.
 */
import React,{Component} from 'react';
import Task from "./Task";

class TaskContainer extends Component{

    render(){
        console.log(this.props.sortType);
        const sortedTasks = this.props.sortType === "byAlphabet"
                                    ? [...this.props.tasks].sort(sortByAlphabet)
                                    : this.props.sortType === "byNewest"
                                        ? [...this.props.tasks].sort(sortByTime)
                                        :this.props.tasks;
        const filteredTasks = this.props.filterText
                                ? sortedTasks.filter( task => task.description.toLowerCase().includes(this.props.filterText.toLowerCase() ))
                                : sortedTasks;
        const tasks = filteredTasks.map( task => ( <Task
                description={task.description}
                done={task.done} id={task.id}
                date={task.date}
                key={task.id}
                onChange={this.props.onFinishing}
                onDelete={this.props.onDelete}/> )
            );

        return (
            <div className="task-container">
                { tasks }
            </div>
        )
    }
}

function sortByTime(a, b) {
    console.log(a.date.toLocaleDateString(), b.date.toLocaleDateString());
    console.log(a.date.toLocaleDateString() < b.date.toLocaleDateString(), "less");
    if( a.date < b.date ) return 1;
    if( a.date > b.date ) return -1;
    return 0;
}
function sortByAlphabet(a, b) {
    if (a.description.toLowerCase() < b.description.toLowerCase())  return -1;
    if (a.description.toLowerCase() > b.description.toLowerCase())  return 1;
    return 0;
}

export default TaskContainer