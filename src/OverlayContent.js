import React from 'react';
import './App.css';
import './App.js';
import ReactDOM from 'react-dom';

class OverlayContent extends React.Component {
    constructor(props) {
        super(props)
      }

    render() {
      return (
        <div className="container white">
          <h1>{this.props.title} </h1>
         

          <p> {this.props.overview} </p>
          <button className="btn btn-default btn-wide palette-sun-flower" onClick={this.props.closeOverlay}>Close</button>
        </div>
      )
    }
  }
  
export default OverlayContent;