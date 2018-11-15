import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCompleted } from '../../module/todos/redux/actions'

class TotalCount extends Component {
  render() {
    return (
      <span onClick={this.props.clear}>Clear completed</span>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  clear: () => {
    dispatch(clearCompleted());
  }
});

export default connect(null, mapDispatchToProps)(TotalCount);