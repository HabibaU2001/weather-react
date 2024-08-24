import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo text-center">
      <h1>{props.data.city}</h1>

      <div className="mt-3">
        <div className=" d-flex justify-content-center mb-3">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>

        <div className=" weather-temp d-flex justify-content-center ">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>

        <ul>
          <li className="date">
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize desc">{props.data.description}</li>
        </ul>
        <div className="weather-details">
          <span>
            Humidity: <strong> {props.data.humidity}% </strong>
          </span>
          <span>
            Wind: <strong> {props.data.wind} km/h</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
