import React from 'react';
import './App.css';
import Movie from './Movie';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      movies: [],
      isToggleOn: true
      
    }
    // this.handleClick = this.handleClick.bind(this);
    this.loadMovies = this.loadMovies.bind(this);
    this.makeMovieComponent = this.makeMovieComponent.bind(this);

  }

  componentDidMount()
  {
    this.loadMovies();
    console.log(this.state.movies);
  }

  loadMovies()
  {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
        console.log(jsonData);
        this.setState({movies: jsonData.results})
    });
  }


  makeMovieComponent(movie)
  {
    return (<Movie particularMovie = {movie}/>)
  }



  render(){
    let displayMovies = [];
    displayMovies = this.state.movies.map(this.makeMovieComponent);

    return(
  <div className="App">
      <div class="wrapper">

        {/* -- HEADER -- */}
        <header>
          <div className="netflixLogo">
            <a id="logo" href="#home"><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true" alt="Logo Image"/></a>
          </div>      
          <nav className="main-nav">                
            <a href="#home">Home</a>
            <a href="#tvShows">TV Shows</a>
            <a href="#movies">Movies</a>
            <a href="#originals">Originals</a>
            <a href="#">Recently Added</a>
            <a target="_blank" href="https://codepen.io/cb2307/full/NzaOrm">Portfolio</a>        
          </nav>
          <nav className="sub-nav">
            <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
            <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a>
            <a href="#">Account</a>        
          </nav>      
        </header>
        {/* -- END OF HEADER -- */}
        
        {/* -- MAIN CONTAINER -- */}
        <section className="main-container" >
          <div className="location" id="home">
              <h1 id="home">Popular on Netflix</h1>
              <div className="box">
                {/* movie list goes here */}
                {displayMovies}
              </div>
          </div>
          
{/* 
          <h1 id="myList">Trending Now</h1>
          <div className="box">
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t1.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t5.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true" alt=""/></a>                  
          </div>
          
          <h1 id="tvShows">TV Shows</h1>
          <div className="box">
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv1.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv2.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv3.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv4.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv5.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv6.PNG?raw=true" alt=""/></a>

            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv7.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv8.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv9.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv10.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv11.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/tv12.PNG?raw=true" alt=""/></a>              
          </div>
          

          <h1 id="movies">Blockbuster Action & Adventure</h1>
          <div className="box">
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m1.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m2.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m3.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m4.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m5.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/m6.PNG?raw=true" alt=""/></a>                
          </div>

          <h1 id="originals">Netflix Originals</h1>
          <div className="box">
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o1.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o2.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o3.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o4.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o5.PNG?raw=true" alt=""/></a>
            <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/o6.PNG?raw=true" alt=""/></a>                
          </div> */}
        </section>
        
        {/* -- END OF MAIN CONTAINER -- */}

        {/* -- LINKS -- */}
        <section className="link">
          <div className="logos">
            <a href="#"><i class="fab fa-facebook-square fa-2x logo"></i></a>
            <a href="#"><i class="fab fa-instagram fa-2x logo"></i></a>
            <a href="#"><i class="fab fa-twitter fa-2x logo"></i></a>
            <a href="#"><i class="fab fa-youtube fa-2x logo"></i></a>
          </div>
          <div className="sub-links">
            <ul>
              <li><a href="#">Audio and Subtitles</a></li>
              <li><a href="#">Audio Description</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Investor Relations</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Legal Notices</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </section>
        {/* -- END OF LINKS -- */}

        {/* -- FOOTER -- */}
        <footer>
          <p>&copy 1997-2018 Netflix, Inc.</p>
          <p>Carlos Avila &copy 2018</p>
        </footer>
      </div> 
    
    </div>    
    );
  }
}


export default App;
