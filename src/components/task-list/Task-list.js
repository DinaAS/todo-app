import React from 'react';
import Task from '../task';

import './Task-list.css';

function TaskList({ todos }) {
  const elements = todos.map((item) => {
    const { id, ...itemsProps } = item;
    return <Task {...itemsProps} key={id} />;
  });

  return <ul className='todolist'>{elements}</ul>;
}

export default TaskList;
