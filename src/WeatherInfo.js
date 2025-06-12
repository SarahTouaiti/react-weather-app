import React from "react";
import FormattedDate from "./formattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.weatherDescription}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={props.info.icon}
              alt={props.info.iconDescription}
              width={50}
              height={50}
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">{props.info.temperature}</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {props.info.humidity}%</li>
              <li>Wind: {props.info.wind} Km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
