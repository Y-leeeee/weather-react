import React, { useState } from "react";

export default function WeatehrTemperatrue(props) {
  return (
    <span className="WeatherTemperature">
      <span className="degree">🌡️{Math.round(props.celsius)}</span>
      <span className="unit">℃</span>
    </span>
  );
}
