import React from 'react'
import './MoviesDisplay.css'
import MovieCard from '../../MovieCard/MovieCard'

const MoviesDisplay = () => {
  return (
    <div className='moviesDisplay'>
        <p>Today's movie picks based on the current weather </p>
        <div className='movies'>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    </div>
  )
}

export default MoviesDisplay