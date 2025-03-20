import React, { useState } from 'react'
import './WeatherDisplay.css'
import sunny from '../../assets/icons/sunny.png'
import wind from '../../assets/icons/wind.png'
import humidity from '../../assets/icons/humidity.png'
import rain from '../../assets/icons/rain.png'
import { CiSearch } from "react-icons/ci";
import {getWeather} from '../../Api';


const WeatherDisplay = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
 
    const fetchWeather = async () => {
        const data = await getWeather(city);
        setWeather(data);
    }

  return (
    <div className='weatherDisplay'>
        <input 
        type="text" 
        placeholder='Search City'
        value={city} 
        onChange={(e) => setCity(e.target.value)}
        className='city-input'/>
        <button onClick={fetchWeather}><CiSearch/></button>
        <div className='currentForecast'>
        </div>
        <div className='currentWeather'>
            <li>
                <img src={wind} alt="" />
                <p>Wind</p>
            </li>
            <li>
                <img src={rain} alt="" />
                <p>precipitation</p>
            </li>
            <li>
                <img src={humidity} alt="" />
                <p>humidity</p>
            </li>
        </div>
    </div>
  )
}

export default WeatherDisplay