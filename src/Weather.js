import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>London</h1>
      <ul>
        <li> Friday 15:07</li>
        <li> Mostly cloudy</li>
      </ul>
    </div>
  );
}
