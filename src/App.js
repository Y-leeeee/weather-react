import "./App.css";
import axios from "axios";

export default function App() {
  function handleRespond(response) {
    alert(`the weather in Seoul is ${response.data.main.temp} `);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleRespond);
  }

  let weatherData = {
    city: "Seoul",
    temperature: 30,
    description: "Sunny",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="App">
      <div className="weather-app">
        <form className="change-city" onSubmit={handleSubmit}>
          <input type="text" className="city-name" placeholder="Type a city" />
          <input
            type="submit"
            className="btn btn-outline-dark"
            id="search-button"
            value="Search"
          />
          <input
            type="submit"
            className="btn btn-outline-dark"
            id="current-city-btn"
            value="Current"
          />
        </form>

        <div className="city">{weatherData.city}</div>
        <div className="current-time"></div>
        <img src="#" alt="" className="icon-element" />
        <div>
          <span className="temperature-now">{weatherData.temperature}℃</span>
        </div>
        <div className="description">{weatherData.description}</div>

        <div className="details">
          <div className="humidity">{weatherData.humidity}%</div>

          <div className="wind">{weatherData.wind}km/h</div>
        </div>

        <div className="weather-forecast" id="forecast"></div>
      </div>
    </div>
  );
}
