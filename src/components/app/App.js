import './App.css';
import Header from '../header';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    todos: [
      { taskName: 'Completed task', status: 'created', id: 1 },
      { taskName: 'Editing task', status: 'created', id: 2 },
      { taskName: 'Active task', status: 'created', id: 3 },
    ],
  };

  completed = this.state.todos.reduce((acc, item) => {
    if (item.status === 'completed') {
      acc++;
    }
    return acc;
  }, 0);

  deleteTask = (id) => {
    this.setState(({ todos }) => {
      let idx = todos.findIndex((el) => el.id === id);
      const newArray = todos.filter((el, index) => index !== idx);
      return {
        todos: newArray,
      };
    });
  };

  addTask = (text) => {
    console.log('Add', text);
  };

  render() {
    return (
      <div className='todoapp'>
        <Header />
        <NewTaskForm onAdded={this.addTask} />
        <section className='main'>
          <TaskList todos={this.state.todos} onDeleted={this.deleteTask} />
          <Footer completed={this.state.completed} />
        </section>
      </div>
    );
  }
}
