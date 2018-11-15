import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../../module/filters/redux/actions';
import './index.css'

class FiltersItem extends Component {
  render() {
    const { active, children} = this.props
    return (
      <div className="filtersItem">
        <a className={` ${active ? 'selectedState' : ''}`} href='javascript:void(0)' onClick={this.props.toggleFilter}>{ children }</a>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleFilter: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersItem);