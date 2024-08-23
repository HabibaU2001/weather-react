import React from "react";
import axios from "axios";
import "./Weather.css";

export default function WeatherSearch() {
  return (
    <div className="SearchForm">
      <form class="search-form" id="search-form">
        <input
          type="search"
          placeholder="Enter a City.."
          required
          id="search-form-input"
          class="search-form-input"
        />
        <input type="submit" value="Search" class="search-form-button" />
      </form>
    </div>
  );
}
