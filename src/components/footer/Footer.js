import React from 'react';
import TasksFilter from '../tasks-filter';
import PropTypes from 'prop-types';

import './footer.css';

function Footer({
  countTodo,
  onDeleteCompletedTask,
  onActiveTasks,
  onCompletedTasks,
  onAllTasks,
}) {
  return (
    <footer className='footer'>
      <span className='todocount'>{countTodo} items left</span>
      <TasksFilter
        onActiveTasks={onActiveTasks}
        onCompletedTasks={onCompletedTasks}
        onAllTasks={onAllTasks}
      />
      <button className='clear-completed' onClick={onDeleteCompletedTask}>
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  countTodo: PropTypes.number,
  onDeleteCompletedTask: PropTypes.func,
  onActiveTasks: PropTypes.func,
  onCompletedTasks: PropTypes.func,
  onAllTasks: PropTypes.func,
};

export default Footer;
