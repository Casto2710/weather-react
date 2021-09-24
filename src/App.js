import logo from './logo.svg';
import './App.css';
import Weather from './Weather';
import WeatherSearch from './WeatherSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
     <Weather city ="London"/>

        <WeatherSearch />
      </header>
   

    <a href="https://github.com/Casto2710/weather-react"
    terget="_blank" alt="repository"
    
    >open-source code
    by Jolanta Studencka
  
    </a>
    </div>
  );
}



export default App;
