import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import WeatherInfo from './WeatherInfo';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Weather App</h2>
     <Weather defaultcity ="London"/>
     
        <WeatherInfo />
      </header>
   

    <a href="https://github.com/Casto2710/weather-react"
    terget="_blank" alt="repository"
    
    >open-source code
    by Jolanta Studencka
  
    </a>
    </div>
    </div>
  );
}



export default App;
