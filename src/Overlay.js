import React from 'react';
import './App.css';
import './App.js';
import Portal from './Portal';
import OverlayContent from './OverlayContent';
import ReactDOM from 'react-dom';


class Overlay extends React.Component {
    constructor(props) {
      super(props)
      this.state = { overlay: false }
      this.openOverlay = this.openOverlay.bind(this)
      this.closeOverlay = this.closeOverlay.bind(this)
    }
    
    openOverlay() {
      this.setState({ overlay: true })   
    }
    
    closeOverlay() {
      this.setState({ overlay: false })
    }
    
    render() {
      return (
        <div>
        <img src={this.props.imageLocation} alt={this.props.title} onClick={this.openOverlay}/> 
          {this.state.overlay &&
            <Portal>
              <OverlayContent title = {this.props.title} overview = {this.props.overview} closeOverlay={this.closeOverlay} />
            </Portal>
          }
        </div>
      )
    }
  }

  export default Overlay;