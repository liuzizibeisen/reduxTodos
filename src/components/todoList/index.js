import React, { Component } from 'react'
import TodoItem from '../todoItem/index'
import { connect } from 'react-redux'
import {toggleTodo, removeTodo} from '../../module/todos/redux/actions'
import {FilterTypes} from '../../constants'
import './index.css'
class TodoList extends Component {
  render() {
    const { todos, onToggleTodo, onRemoveTodo } = this.props
    return (
      <div className="todoList">
        <ul>
        {
          todos.map((item) => (
            <TodoItem
              key={item.id}
              text={item.text}
              completed={item.completed}
              onToggle={() => onToggleTodo(item.id)}
              onRemove={() => onRemoveTodo(item.id)}
            />
          ))
        }
      </ul>
    </div>
    )
  }
}
const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.ACTIVE:
      return todos.filter(item => !item.completed);
    default:
      throw new Error('unsupported filter');
  }
}

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },
    onRemoveTodo: (id) => {
      dispatch(removeTodo(id));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
