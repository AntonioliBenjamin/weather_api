require('dotenv').config();
const apiWeatherKey = process.env.KEY_WEATHER;
const axios = require('axios');


async function getWeather() {
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiWeatherKey}&q=Paris&aqi=no`);
      console.log(`Il fait ${response.data.current.temp_c}° aujourd'hui à Paris`);
    } catch (error) {
      console.error(error);
    }
  }

getWeather();