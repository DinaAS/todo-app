import './app.css';
import Header from '../header';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';
import React, { Component } from 'react';

export default class App extends Component {
  idItem = 1;

  state = {
    todos: [],
  };

  createTask(taskName) {
    return {
      taskName,
      done: false,
      edit: false,
      view: true,
      updateText: '',
      id: this.idItem++,
    };
  }

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
    const newTask = this.createTask(text);

    this.setState(({ todos }) => {
      const newArray = [...todos, newTask];
      return {
        todos: newArray,
      };
    });
  };

  toggleProperty(arr, id, propertyName) {
    const index = arr.findIndex((elem) => elem.id === id);

    const oldItem = arr[index];
    const newItem = { ...oldItem, [propertyName]: !oldItem[propertyName] };

    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, 'done'),
      };
    });
  };

  onEdit = (id) => {
    this.setState(({ todos }) => {
      return {
        todos: this.toggleProperty(todos, id, 'edit'),
      };
    });
  };

  updateTask = (id, text) => {
    const { todos } = this.state;
    const index = todos.findIndex((elem) => elem.id === id);
    const oldItem = todos[index];
    const newItem = { ...oldItem, taskName: text, edit: false };
    const newArray = [
      ...todos.slice(0, index),
      newItem,
      ...todos.slice(index + 1),
    ];
    this.setState(({ todos }) => {
      return {
        todos: newArray,
      };
    });
  };

  deleteCompletedTask = () => {
    this.setState(({ todos }) => {
      const newArray = todos.filter((el) => el.done === false);
      return {
        todos: newArray,
      };
    });
  };

  activeTasks = () => {
    this.setState(({ todos }) => {
      const newArray = todos.map((el) => {
        if (el.done === true) {
          el.view = false;
          return el;
        } else {
          el.view = true;
          return el;
        }
      });

      return {
        todos: newArray,
      };
    });
  };

  allTasks = () => {
    this.setState(({ todos }) => {
      const newArray = todos.map((el) => {
        el.view = true;
        return el;
      });

      return {
        todos: newArray,
      };
    });
  };

  completedTasks = () => {
    this.setState(({ todos }) => {
      const newArray = todos.map((el) => {
        if (el.done === true) {
          el.view = true;
          return el;
        } else {
          el.view = false;
          return el;
        }
      });

      return {
        todos: newArray,
      };
    });
  };

  render() {
    const countTodo = this.state.todos.filter((el) => el.done === false).length;

    return (
      <div className='todoapp'>
        <Header />
        <NewTaskForm onAdded={this.addTask} />
        <section className='main'>
          <TaskList
            todos={this.state.todos}
            onDeleted={this.deleteTask}
            onToggleDone={this.onToggleDone}
            onEditing={this.onEdit}
            onUpdate={this.updateTask}
          />
          <Footer
            todos={this.state.todos}
            countTodo={countTodo}
            onDeleteCompletedTask={this.deleteCompletedTask}
            onActiveTasks={this.activeTasks}
            onAllTasks={this.allTasks}
            onCompletedTasks={this.completedTasks}
          />
        </section>
      </div>
    );
  }
}
