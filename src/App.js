import React, { Component } from 'react';
import TaskForm from "./components/TaskForm";
import TaskContainer from "./components/TaskContainer";
import SortTasks from "./components/SortTasks"
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        tasks: [],
        sort: "none",
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleFinishing = this.handleFinishing.bind(this);
    this.handleChangeSorting = this.handleChangeSorting.bind(this);
    this.handleFiltering = this.handleFiltering.bind(this);

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
    handleDelete( taskId ){
        this.setState( prevState => {
            const newTasks = prevState.tasks.filter( task => task.id !== taskId );
            return ({ ...prevState, tasks: newTasks })
        });
    }
    handleFinishing(taskId ){
        this.setState( prevState => {
            const newTasks = prevState.tasks.map( task => {
                return task.id === taskId ? {...task, done: !task.done } : task
            });
            return ({ ...prevState, tasks: newTasks })
        });
    }
    handleAdd( newTask ){
        this.setState( prevState => {
            prevState.tasks.push(newTask);
            const newTasks = prevState.tasks;
            return {
                tasks: newTasks
            }
        });
    }
    handleChangeSorting( typeOfSorting ){
        this.setState( prevState => ({ sort: typeOfSorting }) )
    }
    handleFiltering(){

    }
  render() {
      const lastId = this.state.tasks.length ? this.state.tasks[this.state.tasks.length-1].id : 0;
    return (
        <div className="App">
            <SortTasks
                onChangeSorting={this.handleChangeSorting}
                onFiltering={this.handleFiltering}
            />
            <TaskContainer
                tasks={this.state.tasks}
                onFinishing={this.handleFinishing}
                onDelete={this.handleDelete}
                sortType ={this.state.sort}
            />
            <TaskForm onAdding={this.handleAdd} lastId = { lastId + 1 } />
        </div>
    )
  }
}

export default App;
