import React, { useEffect, useState } from 'react';
import '../CSS/fourteen.css';

export default function Fourteen() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Get weather data
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=faed6d9e9c93710396c98eee64f64577&units=metric`)
         .then((response) => response.json())
         .then((data) => setWeather(data));

        // Get city name
        fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&appid=faed6d9e9c93710396c98eee64f64577`)
         .then((response) => response.json())
         .then((data) => setCity(data[0]?.name || 'Unknown'));
      });
    }
  }, []);

  return (
    <div className="container">
      {weather && city ? (
        <div className="weather-card">
          <h2>Current Weather in {city}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}
