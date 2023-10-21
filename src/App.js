import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Seoul" />
        <footer>
          This project was coded by Youri Lee and is {""}
          <a
            href="https://github.com/Y-leeeee/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
