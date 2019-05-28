import React, { Component } from 'react';
import TestComponent from './TestComponent.js'
import {connect} from 'react-redux'


class Welcome extends Component {

  handleSelectCategory=(category)=>{
    this.props.selectCategory(category)
  }

  render() {
    console.log(this.props.selectedCategory);
    return (
      <div>
        <div id="category-container">
          <div onClick={(event)=>this.handleSelectCategory("education")} className="category-box">ed</div>
          <div onClick={(event)=>this.handleSelectCategory("environment")} className="category-box">env</div>
          <div onClick={(event)=>this.handleSelectCategory("healthcare")} className="category-box">health</div>
        </div>
      </div>
    );
  }

}
function mapStateToProps(state) {
  return {
    counter: state.counter,
    selectedCategory: state.selectedCategory
  }
}
function mapDispatchToProps(dispatch) {
  return{
    selectCategory: (category)=> dispatch({type: 'SELECT_CATEGORY', payload: category})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
