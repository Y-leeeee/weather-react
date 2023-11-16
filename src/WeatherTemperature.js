import React, { useState } from "react";

export default function WeatehrTemperatrue(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="degree">🌡️{Math.round(props.celsius)}</span>
        <span className="unit">
          ℃ |
          <a href="#" onClick={convertToFahrenheit}>
            ℉
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="degree">🌡️{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="#" onClick={convertToCelsius}>
            ℃
          </a>
          | ℉
        </span>
      </span>
    );
  }
}
