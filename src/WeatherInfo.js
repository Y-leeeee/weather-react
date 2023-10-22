import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <div>
        <FormattedDate time={props.data.time} />
      </div>

      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt="weather icon"
        className="icon-element "
      />
      <div className="description text-capitalize">
        {props.data.description}
      </div>
      <div className="details">
        <span className="degree">🌡️{Math.round(props.data.temperature)}℃ </span>
        <span className="humidity">💧 {props.data.humidity}% </span>
        <span className="wind"> 💨{props.data.wind}m/s</span>
      </div>
    </div>
  );
}
