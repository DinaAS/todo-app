import React from 'react';
import Task from '../task';
import PropTypes from 'prop-types';

import './task-list.css';

function TaskList({ todos, onDeleted, onToggleDone, onEditing, onUpdate }) {
  const elements = todos.map((item) => {
    const { id, ...itemsProps } = item;

    return (
      <Task
        {...itemsProps}
        key={id}
        onDeleted={() => onDeleted(id)}
        onToggleDone={() => onToggleDone(id)}
        onEditing={() => onEditing(id)}
        onUpdate={() => onUpdate(id)}
      />
    );
  });

  return <ul className='todolist'>{elements}</ul>;
}

TaskList.propTypes = {
  todos: PropTypes.array,
  key: PropTypes.number,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  onEditing: PropTypes.func,
  onUpdate: PropTypes.func,
};

export default TaskList;
