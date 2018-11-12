import React, { Component } from 'react';
import * as actions from './redux/actions.js';
import reducer from './redux/reducer.js';
import { FilterTypes } from '../../constants.js'

class Filters extends Component {
  
  render() {
    return (
      <div className="filters">
        <a href='#all' filter={FilterTypes.ALL}>全部</a>
        <a href='#completed' filter={FilterTypes.COMPLETED}>已完成</a>
        <a href='#uncompleted' filter={FilterTypes.UNCOMPLETED}>未完成</a>
      </div>
    );
  }
}
export default {actions, reducer, Filters};