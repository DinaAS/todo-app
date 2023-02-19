import React, { Component } from 'react';

import './New-task-form.css';

export default class NewTaskForm extends Component {
  state = {
    value: '',
  };

  render() {
    return (
      <form>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          autoFocus
          type='text'
        ></input>
      </form>
    );
  }
}
