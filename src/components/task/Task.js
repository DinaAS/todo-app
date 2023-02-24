import React, { Component } from 'react';
import { formatDistanceToNow } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import PropTypes from 'prop-types';

import './task.css';

export default class Task extends Component {
  static propTypes = {
    taskName: PropTypes.string,
    onDeleted: PropTypes.func,
    done: PropTypes.bool,
    edit: PropTypes.bool,
    view: PropTypes.bool,
    onToggleDone: PropTypes.func,
    onEditing: PropTypes.func,
  };

  state = {
    task: '',
  };

  dateCreate = new Date();

  date = formatDistanceToNow(this.dateCreate, 'ddd/MMM/D/YYYY/hh/m/ss', {
    includesSeconds: true,
    addSuffix: true,
    locale: ruLocale,
  });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onUpdate(this.props.id, this.state.task);
    this.setState((state) => {
      return {
        task: '',
      };
    });
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
              // value={taskName}
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
            <span className='created'>created {this.date} ago</span>
          </label>
          <button className='icon icon-edit' onClick={onEditing}></button>
          <button className='icon icon-destroy' onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}
