import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoItem from '../todoItem/index';
import { toggleTodo, removeTodo } from '../../module/todo/redux/actions.js';
import { FilterTypes } from '../../constants.js';

const TodoList = ({todos, onToggleTodo, onRemoveTodo}) => {
  return (
    <ul className="todo-list">
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
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

const currentTodosList = (todos, filter) => {
  switch (filter) {
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed);
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed);
    default:
      return todos;
  }
}

// const mapStateToProps = (state) => {
//   return {
//     todos: currentTodosList(state.todos, state.filter)
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onToggleTodo: (id) => {
//       dispatch(toggleTodo(id));
//     },
//     onRemoveTodo: (id) => {
//       dispatch(removeTodo(id));
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default TodoList;