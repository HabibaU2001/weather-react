import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="hero">
      <div className="Weather-App">
        <Weather defaultCity="London" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/HabibaU2001"
            target="_blank"
            rel="noreferrer"
          >
            Habiba Uddin
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/HabibaU2001/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Github{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://weathify-react.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
