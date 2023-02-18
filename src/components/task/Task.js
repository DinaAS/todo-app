import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import './Task.css';

function Task(props) {
  const date = formatDistanceToNow(Date.now(), { includesSeconds: true });
  return (
    <li className={props.status} key={props.id}>
      {props.status === 'editing' && (
        <input type='text' className='edit' defaultValue='Editing task' />
      )}

      <div className={props.view}>
        <input className='toggle' type='checkbox'></input>
        <label>
          <span className='description'>{props.taskName}</span>
          <span className='created'>{date}</span>
        </label>
        <button className='icon icon-edit'></button>
        <button className='icon icon-destroy'></button>
      </div>
    </li>
  );
}

export default Task;
