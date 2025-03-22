import axios from 'axios';

const weather_api_key = "0e1fbae0a04a1dc05e56dc3730439ebc";
// const movies_api_key = "58e8c643229600fec6c901b6bc778677";

export const getWeather = async (city) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=imperial`;
    const response = await axios.get(weatherUrl);

    const temp = Math.floor(response.data.main.temp);
   
    return temp;
}




//function to fetch movie recommendations based on weather conditions
