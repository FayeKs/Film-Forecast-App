import axios from 'axios';

const weather_api_key = "0e1fbae0a04a1dc05e56dc3730439ebc";
const movies_api_key = "58e8c643229600fec6c901b6bc778677";

export const getWeather = async (city) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=imperial`;
    const response = await axios.get(weatherUrl);

    const temp = Math.floor(response.data.main.temp);
   
    return temp;
}




//function to fetch movie recommendations based on weather conditions
export const fetchMoviesByGenre = async (weatherCondition) => {
    const weatherToGenre  = {
        'Clear': '28,12', // Action, Adventure
        'Rain': '35,18', //Comedy, Drama
        'Snow': '16, 35', // Animation, Comedy
        'Clouds': '53,27', //Thriller, Mystery
    }

    const genreIds = weatherToGenre[weatherCondition] || '';
    if (!genreIds) return [];

    try {
        const moviesUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${movies_api_key}&with_genres=28`
        const response = await axios.get(moviesUrl);
        return response.data.results
    } catch (error) {
        console.log('Error fetching movies:', error);
        return[]
    }
}