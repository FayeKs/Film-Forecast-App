import React from 'react'
import WeatherDisplay from './components/WeatherDisplay/WeatherDisplay'
import MoviesDisplay from './components/MoviesDisplay/MoviesDisplay.jsx/MoviesDisplay'

const App = () => {
  return (
    <div className='app'>
      <WeatherDisplay/>
      <MoviesDisplay/>
    </div>
  )
}

export default App