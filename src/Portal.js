import React from 'react';
import './App.css';
import './App.js';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
    constructor(props) {
        super(props)
        // this.state = { portal: "" }
      }

    componentDidMount() {
      this.portal = document.createElement('div')
      this.portal.setAttribute('class', 'overlay overlay-anim')
      document.body.appendChild(this.portal)
      ReactDOM.render(this.props.children, this.portal)
    }
    
    componentWillUnmount() {
      document.body.removeChild(this.portal)
    }
    
    render() {
      return null
    }
  }
  
  
  export default Portal;