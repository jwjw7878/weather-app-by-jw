import React, { useEffect, useState } from "react";
import "../App.css";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiCloudSnow } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { SiAccuweather } from "react-icons/si";
import { TiWeatherCloudy, TiWeatherShower } from "react-icons/ti";

export const Box = ({ weather, hoursWeather }) => {
  // console.log(weather);
  const [icon, setIcon] = useState("");
  const weatherList = hoursWeather?.list.slice(2, 10);
  let status = weather?.weather[0].main;

  const weatherIcon = () => {
    if (status === "Clouds") {
      setIcon(<TiWeatherCloudy className="weather-icon" />);
    } else if (status === "Clear") {
      setIcon(<SiAccuweather className="weather-icon" />);
    } else if (status === "Rain") {
      setIcon(<TiWeatherShower className="weather-icon" />);
    } else {
      setIcon(<FiCloudSnow className="weather-icon" />);
    }
  };
  useEffect(() => {
    if (weather) weatherIcon();
  }, [weather]);

  return (
    <div className="box">
      <h3 className="location">
        <FaLocationDot className="location-icon" />
        {weather?.name}
      </h3>
      <div className="temp-weather">
        <div>
          <p className="temp-text">
            <FaTemperatureHigh /> 기온
          </p>
          <h1>{weather?.main.temp.toFixed(1)} °C</h1>
        </div>
        <div className="icon-area">
          <h2>{icon}</h2>
          <p>{status}</p>
        </div>
      </div>
      <div className="weather-list">
        {weatherList?.map((list, i) => (
          <div key={i} className="list">
            <p className="date">{list.dt_txt.slice(0, 16)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`}
              alt="icon"
            />
            <p className="temp">{list.main.temp.toFixed(1)} °C</p>
          </div>
        ))}
      </div>
    </div>
  );
};
