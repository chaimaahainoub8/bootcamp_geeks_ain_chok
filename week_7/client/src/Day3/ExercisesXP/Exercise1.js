import React, { Component } from 'react';

class Exercise1 extends Component {
  state = { show: true };
  
  componentWillUnmount() { alert("Header is creating problems!"); }

  render() {
    return (
      <div className="border p-3 mb-3">
        <h5>Ex 1: Lifecycle</h5>
        {this.state.show && <h3>Hello World!</h3>}
        <button onClick={() => this.setState({show: false})}>Delete Header</button>
      </div>
    );
  }
}
export default Exercise1;