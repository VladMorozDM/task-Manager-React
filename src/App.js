import React, { Component } from 'react';
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import SortTasks from "./components/SortTasks"
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        tasks: [],
        some: true,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

  }
  componentDidMount(){
      // API Call
      const TASKS = [
          { description: "some task", id: 1, done: false },
          { description: "my task", id: 2, done: false },
          { description: "not boring task", id: 3, done: true },
      ];
      this.setState( prevState => ({ ...prevState, tasks: TASKS }) )
  };
  render() {
    const lastId = this.state.tasks.length ? this.state.tasks[this.state.tasks.length-1].id : 0;
    const tasks = this.state.tasks.map( task => ( <Task
           description={task.description}
           done={task.done} id={task.id}
           key={task.id}
           onChange={this.handleCheck}
           onDelete={this.handleDelete} /> )
        );
    return (
        <div className="App">
            <SortTasks/>
            <div>
                { tasks }
            </div>
            <TaskForm onAdding={this.handleAdd} lastId = { lastId + 1 } />
        </div>
    )
  }
    handleDelete( taskId ){
        this.setState( prevState => {
            const newTasks = prevState.tasks.filter( task => task.id !== taskId );
            return ({ ...prevState, tasks: newTasks })
        })
    }
    handleCheck( taskId ){
        this.setState( prevState => {
            const newTasks = prevState.tasks.map( task => {
                return task.id === taskId ? {...task, done: !task.done } : task
            });
            return ({ ...prevState, tasks: newTasks })
        })
    }
    handleAdd( newTask ){
        this.setState( prevState => {
            prevState.tasks.push(newTask);
            const newTasks = prevState.tasks;
            console.log(newTasks);
            return {
                tasks: newTasks
            }
        } )
    }
}

export default App;
