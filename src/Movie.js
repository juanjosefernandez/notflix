import React from 'react';
import './App.css';
import './App.js';
import Portal from './Portal';
import OverlayContent from './OverlayContent';


class Movie extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
          overlay: false,
          imageLocation: "https://image.tmdb.org/t/p/original/" + this.props.particularMovie.backdrop_path }
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
        <a onHover={this.props.particularMovie.title} class="movie-container">
        <p class="centered">{this.props.particularMovie.title}</p>
        <img src={this.state.imageLocation} alt={this.props.particularMovie.title} onClick={this.openOverlay}/> 
          {this.state.overlay &&
            <Portal>
              <OverlayContent  particularMovie = {this.props.particularMovie} closeOverlay={this.closeOverlay} />
            </Portal>
          }
        </a>
      )
    }
  }

  export default Movie;