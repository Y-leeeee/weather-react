import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      time: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
    });
  }

  function search() {
    const apiKey = "bdb603847ff33c6odd47b612a380tf56";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <form className="change-city" onSubmit={handleSubmit}>
            <input
              type="text"
              className="city-name"
              placeholder="Type a city"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input
              type="submit"
              className="btn btn-secondary"
              id="search-button"
              value="Search"
            />
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast city={weatherData.city} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
