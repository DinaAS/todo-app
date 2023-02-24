import React from 'react';
import Task from '../task';

import './task-list.css';

function TaskList({ todos, onDeleted, onToggleDone, onEditing }) {
  const elements = todos.map((item) => {
    const { id, ...itemsProps } = item;
    return (
      <Task
        {...itemsProps}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        onEditing={() => onEditing(id)}
      />
    );
  });

  return <ul className='todolist'>{elements}</ul>;
}

export default TaskList;
