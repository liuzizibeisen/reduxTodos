import React, { Component } from 'react';
import * as actions from './redux/actions.js';
import reducer from './redux/reducer.js';
import AddTodo from '../../components/addTodo/index'
import TodoList from '../../components/todoList/index'

class Todos extends Component {
  
  render() {
    return (
      <div className="todos">
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}
export default {actions, reducer, Todos};