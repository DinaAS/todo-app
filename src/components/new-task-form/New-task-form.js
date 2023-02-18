import React from 'react';

import './New-task-form.css';

function NewTaskForm() {
  return (
    <input
      className='new-todo'
      placeholder='What needs to be done?'
      autoFocus
    ></input>
  );
}

export default NewTaskForm;
