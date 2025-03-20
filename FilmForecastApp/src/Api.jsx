import axios from 'axios';

const weather_api_key = "0e1fbae0a04a1dc05e56dc3730439ebc";

export const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=imperial`;
    const response = await axios.get(url);

    const temp = Math.floor(response.data.main.temp);
   
    return temp;
}
