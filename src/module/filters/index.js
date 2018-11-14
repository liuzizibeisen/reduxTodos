import React, { Component } from 'react';
import * as actions from './redux/actions.js';
import reducer from './redux/reducer.js';
import { FilterTypes } from '../../constants.js'
import './index.css'

class Filters extends Component {
  render() {
    return (
      <div className='filterBox'>
        <div className="leftTodos">
          <span>{this.props.listLength} </span>
          <span>items left</span>
        </div>
        <div className="filters">
          <a className={`selectedState`} href='#all' filter={FilterTypes.ALL}>All</a>
          <a href='#uncompleted' filter={FilterTypes.UNCOMPLETED}>Active</a>
          <a href='#completed' filter={FilterTypes.COMPLETED}>Completed</a>
        </div>
        <div className="clearCompleted">
          <span>Clear completed</span>
        </div>
      </div>
    );
  }
}
export {actions, reducer, Filters};