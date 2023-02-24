import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';

import './task.css';

export default class Task extends Component {
  state = {
    task: '',
  };

  date = formatDistanceToNow(Date.now(), { includesSeconds: true });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onEditing(this.props.id, this.state.task);
  };

  onChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  render() {
    const { taskName, onDeleted, done, edit, onToggleDone, onEditing, view } =
      this.props;

    let classNameOfTask = '';
    if (done) {
      classNameOfTask += ' completed';
    }

    if (edit) {
      classNameOfTask += ' editing';
    }

    if (!view) {
      classNameOfTask += ' hidden';
    }

    return (
      <li className={classNameOfTask} key={this.props.id}>
        {edit && (
          <form onSubmit={this.onSubmit}>
            <input
              type='text'
              className='edit'
              autoFocus
              onChange={this.onChange}
            />
          </form>
        )}

        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            onClick={onToggleDone}
            checked={done}
            onChange={() => !done}
          ></input>
          <label onClick={onToggleDone}>
            <span className='description'>{taskName}</span>
            <span className='created'>{this.date}</span>
          </label>
          <button className='icon icon-edit' onClick={onEditing}></button>
          <button className='icon icon-destroy' onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}
