import React, { Component, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import './Task.css';

export default class Task extends Component {
  date = formatDistanceToNow(Date.now(), { includesSeconds: true });

  state = {
    done: false,
    checked: false,
  };

  onClickDone = () => {
    this.setState(({ done, checked }) => {
      return {
        done: !done,
        checked: !checked,
      };
    });
  };

  render() {
    const { taskName, onDeleted } = this.props;
    const { done, checked } = this.state;

    let classNameOfTask = '';

    if (done || checked) {
      classNameOfTask += ' completed';
    }

    return (
      <li className={classNameOfTask} key={this.props.id}>
        {/* {this.props.status === 'editing' && (
          <input type='text' className='edit' defaultValue='Editing task' />
        )} */}

        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            onClick={this.onClickDone}
            checked={this.state.checked}
            onChange={() => this.state.checked}
          ></input>
          <label onClick={this.onClickDone}>
            <span className='description'>{taskName}</span>
            <span className='created'>{this.date}</span>
          </label>
          <button className='icon icon-edit'></button>
          <button className='icon icon-destroy' onClick={onDeleted}></button>
        </div>
      </li>
    );
  }
}
