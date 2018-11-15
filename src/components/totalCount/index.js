import React, { Component } from 'react';
import {connect} from 'react-redux';

class TotalCount extends Component {
  render() {
    return (
      <div className="totalCount">
        <span>{this.props.todos.length} </span>
        <span>items left</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos.filter(item => !item.completed)
  };
}

export default connect(mapStateToProps, null)(TotalCount);