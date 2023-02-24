import React, { Component } from 'react';

import './tasks-filter.css';

export default class TasksFilter extends Component {
  state = {
    active: 'all',
  };

  onFilter = (e) => {
    if (e.target.id === 'active') {
      this.props.onActiveTasks();
    }
    if (e.target.id === 'complete') {
      this.props.onCompletedTasks();
    }
    if (e.target.id === 'all') {
      this.props.onAllTasks();
    }
    this.setState({
      active: e.target.id,
    });
  };

  render() {
    return (
      <ul className='filters'>
        <li>
          <button
            id='all'
            className={this.state.active === 'all' ? 'selected' : ''}
            type='button'
            onClick={this.onFilter}
          >
            All
          </button>
        </li>
        <li>
          <button
            id='active'
            className={this.state.active === 'active' ? 'selected' : ''}
            type='button'
            onClick={this.onFilter}
          >
            Active
          </button>
        </li>
        <li>
          <button
            id='complete'
            className={this.state.active === 'complete' ? 'selected' : ''}
            type='button'
            onClick={this.onFilter}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
