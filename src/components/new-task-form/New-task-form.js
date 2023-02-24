import React, { Component } from 'react';

import './new-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    task: '',
  };

  onTaskChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.task);
    this.setState({
      task: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          type='text'
          onChange={this.onTaskChange}
          value={this.state.task}
        ></input>
      </form>
    );
  }
}
