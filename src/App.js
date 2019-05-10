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
        sort: "byDefault",
        filterText: ""
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleFinishing = this.handleFinishing.bind(this);
    this.handleChangeSorting = this.handleChangeSorting.bind(this);

  }
  componentDidMount(){
      // API Call
      const tasksFromStorage = JSON.parse(localStorage.getItem("tasks"));
      const TASKS = tasksFromStorage
          ? tasksFromStorage
          : [
                { description: "some task", id: 1, done: false, date: new Date('February 17, 2019') },
                { description: "my task", id: 2, done: false, date: new Date('January 1, 2019') },
                { description: "not boring task", id: 3, done: true, date: new Date('May 1, 2019') },
                { description: "Drop some loot", id: 4, done: true, date: new Date('January  10, 2019') },
                { description: "Add something somewhere", id: 5, done: true, date: new Date('May 10, 2019') },
            ];
      this.setState( prevState => ({ ...prevState, tasks: TASKS }) )
  };
  componentDidUpdate(){
      localStorage.setItem( "tasks", JSON.stringify(this.state.tasks) );
  }
    handleDelete( taskId ){
        this.setState( prevState => {
            const newTasks = prevState.tasks.filter( task => task.id !== taskId );
            return ({ ...prevState, tasks: newTasks })
        });
    }
    handleFinishing(taskId ){
        this.setState( prevState => {
            const newTasks = prevState.tasks.map( task => task.id === taskId ? {...task, done: !task.done } : task );
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
    handleChangeSorting( name, value ){
        this.setState( prevState => ({ [name]: value }) )
    }

  render() {
      const lastId = this.state.tasks.length ? this.state.tasks[this.state.tasks.length-1].id : 0;
    return (
        <div className="App">
            <SortTasks
                sortType={this.state.sort}
                onChangeSorting={this.handleChangeSorting}
            />
            <TaskContainer
                tasks={this.state.tasks}
                onFinishing={this.handleFinishing}
                onDelete={this.handleDelete}
                sortType={this.state.sort}
                filterText={this.state.filterText}
            />
            <TaskForm onAdding={this.handleAdd} lastId = { lastId + 1 } />
        </div>
    )
  }
}

export default App;
