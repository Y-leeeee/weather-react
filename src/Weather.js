import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [temperature, setTemperature] = useState(null);
  const apiKey = "bdb603847ff33c6odd47b612a380tf56";
  let city = "Seoul";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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
        <h1 className="city">Jeju</h1>

        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="weather icon"
          className="icon-element "
        />
        <div className="description">Cloudy</div>
        <div className="details">
          <span className="degree">🌡️32℃ </span>
          <span className="humidity">💧 65% </span>
          <span className="wind"> 💨13m/s</span>
        </div>
      </div>
    </div>
  );
}
