
import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./Weathericon";
import formatedDate from "./FormatedDate";


export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      date: formatedDate(response.data.dt*1000),
      city:response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit"autoFocus="on">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        
          <formatedDate date={weather.date}/>
          Date:{weather.date.getDay()}
          Temperature: {Math.round(weather.temperature)}°C | °F
          Description: {weather.description}
          Humidity: {weather.humidity}%
          Wind: {weather.wind}km/h
          
        <WeatherIcon code={weather.data.icon} alt={weather.data.description}/>
        </div>
     
    );
  } else {
    return form;
  }
}



