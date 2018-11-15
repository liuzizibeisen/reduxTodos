import React, {Component} from 'react';
import './index.css'
import { connect } from 'react-redux'
import { addTodo } from '../../module/todos/redux/actions'
class AddTodo extends Component {
  onAddTodo = (e) => {
    if (e.keyCode === 13) {
      this.props.onAdd(e.currentTarget.value)
      e.currentTarget.value = ''
    }
  }
  render() {
    return (
      <div className="addTodo">
        <input className="addText" type="text" placeholder="What needs to be done?" onKeyDown={this.onAddTodo.bind(this)} />
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);
