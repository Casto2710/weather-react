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
    </div>
  );
}
<small>
<a
href="https://github.com/Casto2710/Vanilla-Weather-App"
terget="blank"
>open-source code</a>
by Jolanta Studencka
</small>


export default App;
