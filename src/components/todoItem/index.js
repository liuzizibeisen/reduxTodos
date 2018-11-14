import React, {Component} from 'react';
import './index.css'
class AddTodo extends Component {

  render() {
    return (
      <li className="todoItem" >
        <input type="checkbox" />
        <span className={`label`} >aa</span>
        <button className={`delete`}>X</button>
      </li>
    )
  }
}
export default AddTodo;
