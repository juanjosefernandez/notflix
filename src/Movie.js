import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.js';
import Overlay from './Overlay';
import ReactDOM from 'react-dom';

// const backDropUrl = "https://image.tmdb.org/t/p/original/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg";

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageLocation: "https://image.tmdb.org/t/p/original/" + this.props.backdrop,
      isToggleOn: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log(this.state.imageLocation);
  }

  handleClick() {
    return (<Overlay title={this.props.title} overview={this.props.overview} />)
  }

  render() {
    return (
      // <a><img src={this.state.imageLocation} alt={this.props.title} onClick={this.handleClick}/>    
      <a><Overlay title={this.props.title} overview={this.props.overview} imageLocation={this.state.imageLocation} /></a>            // {console.log(this.state.imageURL);}
    )
  }
}


export default Movie;
