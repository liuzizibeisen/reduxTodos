import React, { Component } from 'react';
import TodoItem from '../todoItem/index';
import './index.css'

class TodoList extends Component {
  render() {
    return (
      <div className="todoList">
        <ul>
          <TodoItem />
      </ul>
    </div>
    )
  }
}

export default TodoList;
