import React, {Component} from 'react';
import './index.css'
class AddTodo extends Component {
  render() {
    const { text, completed, onToggle, onRemove } = this.props
    return (
      <li className="todoItem" >
        <input type="checkbox" onClick={onToggle}/>
        <span className={`label ${completed ? 'through' : ''}`} >{text}</span>
        <button className={`delete`} onClick={onRemove} >X</button>
      </li>
    )
  }
}
export default AddTodo;
