import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './MoviesDisplay.css'



const MoviesDisplay = ({weatherCondition}) => {
  const [movieRecommendations, setMovieRecommendations] = useState([]);

  const movieApiKey = "58e8c643229600fec6c901b6bc778677";

  useEffect(() => {
    if(weatherCondition){
      getMovieRecommendations(weatherCondition)
    }
  }, [weatherCondition]);

  const getMovieRecommendations = (weatherCondition) => {
    let genreId = 28;

    switch (weatherCondition) {
      case "Clear":
        genreId = 28 //action;
        break;
      case "Rain":
        genreId =   27; // Horror
        break;
      case "Clouds":
        genreId = 35; //comedy
        break;
    }
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${movieApiKey}&with_genres=${genreId}&sort_by=popularity.desc`)
      .then((res) => {
      if (Array.isArray(res.data.results)) {
        setMovieRecommendations(res.data.results.slice(0, 10)) }
      })
      .catch((err) => console.log(err));
  }

  // functio to render movie display parapgraph bsed on the weather
  const getWeatherMessage = (condition) => {
    switch (condition) {
      case "Clouds":
        return "Feel-good movies for a cloudy day";
       case "Clear":
       return "Perfect weather for an action-packed movie!"; 
    }
  }


  return (
    <div className='moviesDisplay'>
        <div className='movies'>
          <div className='moviesTop'>
           <p>{getWeatherMessage(weatherCondition)}</p>
           <hr />
        </div>
           {movieRecommendations.length > 0 ? (
            movieRecommendations.map((movie) => (
              <div key ={movie.id} className='movieCard'>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                {/* <h4>{movie.title}</h4> */}
              </div>
            ))
           ) :(
            <p>No Movie Recommendations</p>
           )}
        </div>
    </div>
  )
}

export default MoviesDisplay