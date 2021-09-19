import React from "react";
import axios from 'axios';

export default function Weather(props) {
function handleResponse (response) {
alert (
`The weather in ${response.data.name} is
 ${response.data.main.temp}°C`
);
}
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
    q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
       <h2>Weather App</h2>
    )
    }
<small>
<a
href="https://github.com/Casto2710/Vanilla-Weather-App"
terget="blank"
>open-source code</a>
by Jolanta Studencka
</small>
