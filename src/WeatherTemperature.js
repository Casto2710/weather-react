import React, {useState} from "react";


export default function WeatherTemperature(props) {
    const {unit,setUnit}= useState("celcius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("Fahrenheit")
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function Fahrenheit() {
        return(props.celcuis *9) / 5 + 32;
        }
if (unit === "celsius") {
    return (
    <div classNme="WeatherTemperature">
    <span className="temperature">{Math.round(props.celsius)}</span>
    <span className="unit">
    °C |{" "} 
    <a href="/" onClick={showFahrenheit}>
           °F
           </a>
    </span>
 </div>
    );
}

}


