import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <div className="city">Jeju</div>
        <div className="current-time"></div>
        <img src="#" alt="weather icon" className="icon-element" />
        <div>
          <span className="temperature-now">28℃</span>
        </div>
        <div className="description">Cloudy </div>
        <div className="details">
          <div className="humidity">65%</div>
          <div className="wind"> wind 13m/s</div>
        </div>
        <div className="weather-forcast"></div>
      </div>
    </div>
  );
}
