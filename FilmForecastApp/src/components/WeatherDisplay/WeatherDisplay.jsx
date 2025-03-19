import React from 'react'
import './WeatherDisplay.css'
import sunny from '../../assets/icons/sunny.png'
import wind from '../../assets/icons/wind.png'
import humidity from '../../assets/icons/humidity.png'
import rain from '../../assets/icons/rain.png'

const WeatherDisplay = () => {
  return (
    <div className='weatherDisplay'>
        <input type="text" placeholder='Search City' />
        <div className='currentForecast'>
         <p>Fort Lauderdale</p> 
         <img src={sunny} alt="" className='currentForecastIcon'/>
         <p>75 F</p>
        </div>
        <div className='currentWeather'>
            <li><img src={wind} alt="" /></li>
            <li><img src={rain} alt="" /></li>
            <li><img src={humidity} alt="" /></li>
        </div>
    </div>
  )
}

export default WeatherDisplay