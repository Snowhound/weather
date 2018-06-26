import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactChartkick from 'react-chartkick';
import Chart from 'chart.js';

import AppMenu from './AppMenu';
import ForecastPage from './forecast/ForecastPage';
import './App.css';
import HourlyForecast from './forecast/HourlyForecast';
import WelcomePage from './WelcomePage';

ReactChartkick.addAdapter(Chart);


class App extends Component {

  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <h1 className="appTitle">WeatherApp</h1>
        </header>
        <div>
          <BrowserRouter>
            <div>
              <AppMenu />
              {/* TODO notFound page etc */}
                <Route exact path="/" component={WelcomePage} />
                <Route path="/forecast/:city" component={ForecastPage} />
                <Route exact path="/forecast/:city/hourly/:index" component={HourlyForecast} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}



export default App;
