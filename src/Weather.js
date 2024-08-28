import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "ad793a6d772939c31783de5822791acf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="SearchForm">
          <form
            onSubmit={handleSubmit}
            className="search-form"
            id="search-form"
          >
            <input
              type="search"
              placeholder="Enter a City.."
              required
              id="search-form-input"
              className="search-form-input"
              onChange={handleCityChange}
            />
            <input
              type="submit"
              value="Search"
              className="search-form-button"
              autoFocus="on"
            />
          </form>
          <hr />
          <WeatherInfo data={weatherData} />
          <WeatherForecast />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
