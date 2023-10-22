import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
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
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather-app">
          <form className="change-city">
            <input
              type="text"
              className="city-name"
              placeholder="Type a city"
              autoFocus="on"
            />
            <input
              type="submit"
              className="btn btn-outline-dark"
              id="search-button"
              value="Search"
            />
            <input
              type="submit"
              className="btn btn-outline-dark"
              id="current-city-button"
              value="Current"
            />
          </form>
          <h1 className="city">{weatherData.city}</h1>
          <div>
            <FormattedDate date={weatherData.date} />
          </div>

          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="weather icon"
            className="icon-element "
          />
          <div className="description text-capitalize">
            {weatherData.description}
          </div>
          <div className="details">
            <span className="degree">🌡️{weatherData.temperature}℃ </span>
            <span className="humidity">💧 {weatherData.humidity}% </span>
            <span className="wind"> 💨{weatherData.wind}m/s</span>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bdb603847ff33c6odd47b612a380tf56";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
