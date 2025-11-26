import React, { Component } from 'react';
import './Exercise3.css'; // Make sure to create this CSS file below

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};

class Exercise3 extends Component {
  render() {
    return (
      <div className="border p-3 mb-3">
        <h5>Ex 3: HTML Tags & Styles</h5>
        <h1 style={style_header}>This is a Header</h1>
        <p className="para">This is a Paragraph</p>
        <a href="https://reactjs.org">This is a Link</a>
        <br/><br/>
        <form>
            <label>Name: <input type="text"/></label>
            <button>Submit</button>
        </form>
        <p>This is a List:</p>
        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
        </ul>
      </div>
    );
  }
}
export default Exercise3;