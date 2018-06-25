import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppMenu from './AppMenu';
import NotFoundPage from './NotFoundPage';
import ForecastPage from './forecast/ForecastPage';
import './App.css';
import HourlyForecast from './forecast/HourlyForecast';


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
                <Route exact path="/" component={ForecastPage} />
                <Route path="/forecast/:city" component={ForecastPage} />
                <Route exact path="/forecast/:city/hourly" component={HourlyForecast} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}



export default App;
