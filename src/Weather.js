import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [dataFetched, setDataFetched] = useState(false);
  let [Weather, setWeather] = useState({});

  function showWeather(response) {
    setDataFetched(true);
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "7784a4cd4aa2e0c25ead7bd96d585b8a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-bar"
        onChange={updateCity}
        placeholder="Enter a City"
      />
      <button type="submit" className="submit">
        {" "}
        Search{" "}
      </button>
    </form>
  );

  if (dataFetched) {
    return (
      <div>
        {form}
        <ul>
          <li> Temperature: {Math.round(Weather.temperature)}°C</li>
          <li>Description: {Weather.description}</li>
          <li>Humidity: {Weather.humidity}%</li>
          <li>Wind: {Weather.wind}km/h</li>
          <li>
            <img src={Weather.icon} alt="weather icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
