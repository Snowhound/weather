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
          <video autoPlay loop muted>
            <source src="/HeaderVideo.mp4" type="video/mp4" />
          </video>
        </header>
        <div>
          <BrowserRouter>
            <div>
              <AppMenu />
                <Route exact path="/" component={WelcomePage} />
                <Route path="/forecast/:city" component={ForecastPage} />
                <Route exact path="/forecast/:city/hourly/:index" component={HourlyForecast} 
                />
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}



export default App;
