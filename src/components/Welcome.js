import React, { Component } from 'react';
import TestComponent from './TestComponent.js'
import {connect} from 'react-redux'


class Welcome extends Component {

  handleCounterPlus=()=>{
    this.props.counterPlus()
  }

  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <div>
          Welcome Component
          <button onClick={this.handleCounterPlus}>Welcome Component</button>
        </div>
        <div>
        <TestComponent/>
        </div>
      </div>
    );
  }

}
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}
function mapDispatchToProps(dispatch) {
  return{
    counterPlus: ()=> dispatch({type: 'COUNTER_PLUS', payload: "test"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
