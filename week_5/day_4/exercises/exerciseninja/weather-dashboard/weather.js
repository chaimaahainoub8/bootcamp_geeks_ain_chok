const axios = require('axios');
const chalk = require('chalk');

async function getWeather(cityName) {
  if (!cityName) {
    console.error(chalk.red('Error: Please provide a city name.'));
    return;
  }

  // Use the wttr.in JSON format
  const url = `https://wttr.in/${encodeURIComponent(cityName)}?format=j1`;

  try {
    const response = await axios.get(url);
    const weather = response.data;

    // Parse the relevant information
    const location = weather.nearest_area[0].areaName[0].value;
    const country = weather.nearest_area[0].country[0].value;
    const current = weather.current_condition[0];
    
    console.log(chalk.cyan.bold(`\nWeather for ${location}, ${country}:`));
    console.log(chalk.white(`- Condition: ${current.weatherDesc[0].value}`));
    console.log(chalk.white(`- Temperature: ${current.temp_C}°C (Feels like ${current.FeelsLikeC}°C)`));
    console.log(chalk.white(`- Wind: ${current.windspeedKmph} km/h from ${current.winddir16Point}`));
    console.log(chalk.white(`- Humidity: ${current.humidity}%`));
    console.log(chalk.gray('------------------------------------'));


  } catch (error) {
    console.error(chalk.red.bold(`\nCould not fetch weather for "${cityName}".`));
    console.error(chalk.red('Please check the city name or your internet connection.'));
    console.log(chalk.gray('------------------------------------'));
  }
}

module.exports = getWeather;