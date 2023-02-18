import React from 'react';
import TasksFilter from '../tasks-filter';

import './Footer.css';

function Footer({ completed }) {
  return (
    <footer className='footer'>
      <span className='todocount'>{completed} items left</span>
      <TasksFilter />
      <button className='clear-completed'>Clear completed</button>
    </footer>
  );
}

export default Footer;
