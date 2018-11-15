import React, { Component } from 'react';
import * as actions from './redux/actions.js';
import reducer from './redux/reducer.js';
import FilterList from '../../components/filter/index'
import TotalCount from '../../components/totalCount/index'
import ClearCompleted from '../../components/clearCompleted/index'
import { FilterTypes } from '../../constants.js'
import './index.css'

class Filters extends Component {
  render() {
    return (
      <div className='filterBox'>
        <div className="leftTodos">
          <TotalCount />
        </div>
        <div className="filters">
          <FilterList filter={FilterTypes.ALL}> {FilterTypes.ALL} </FilterList>
          <FilterList filter={FilterTypes.ACTIVE}> {FilterTypes.ACTIVE} </FilterList>
          <FilterList filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </FilterList>
        </div>
        <div className="clearCompleted">
          <ClearCompleted />
        </div>
      </div>
    );
  }
}

export {actions, reducer, Filters};