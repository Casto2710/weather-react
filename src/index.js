import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WeatherSearch from "./WeatherSearch";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




reportWebVitals();
