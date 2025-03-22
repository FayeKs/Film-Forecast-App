import React, { useState, useEffect } from 'react';
import './WeatherDisplay.css'
import axios from 'axios';
import sunny from '../../assets/icons/sunny.png'
import Clouds from '../../assets/icons/Clouds.png'
import wind from '../../assets/icons/wind.png'
import humidity from '../../assets/icons/humidity.png'
import rain from '../../assets/icons/rain.png'
import { CiSearch } from "react-icons/ci";



const WeatherDisplay = () => {
        const [data, setData] = useState({
           fahrenheit: 10,
           name: `London`,
           humidty: 10,
           wind: 12,
           image: sunny
        })

const [name, setName] = useState('')


        const handleClick = () => {
            if (name !== "") {
                const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=0e1fbae0a04a1dc05e56dc3730439ebc&units=imperial`
                axios.get(apiUrl)
                .then(res => {
                    let imagePath = '';
                    console.log(res.data);
                    if (res.data.weather[0].main == "Clear") {
                        imagePath = sunny;
                    } else if(res.data.weather[0].main === "Rain") {
                        imagePath = rain;
                    } else if (res.data.weather[0].main === "Clouds"){
                        imagePath = Clouds;
                    } else if (res.data.weather[0].main === "Mist") {
                        imagePath = Clouds;
                    }

                    setData({...data, fahrenheit: res.data.main.temp, name: res.data.name, humidity: res.data.main.humidity, image: imagePath, wind: res.data.wind.speed
                        
                    })
                })
                .catch( err => console.log(err));
            }
        }
    
  return (
    <div className='weatherDisplay'>
        <input 
        type="text" 
        placeholder='Search City'
        onChange={e => setName(e.target.value)}
        className='city-input'/>
        <button onClick={handleClick}><CiSearch/></button>
        <div className='currentForecast'>
            <h2>{data.name}</h2>
            <p>{Math.round(data.fahrenheit)}°F</p>
            <img src={data.image} alt="" />
            <p></p>
        </div>



        <div className='currentWeather'>
            <li>
                <img src={wind} alt="" />
                <p>{Math.round(data.wind)}mph</p>
            </li>
            <li>
                <img src={humidity} alt="" />
                <p>{data.humidity}%</p>
            </li>
        </div>
    </div>
  )
}

export default WeatherDisplay