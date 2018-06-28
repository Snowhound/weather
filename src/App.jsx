import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactChartkick from 'react-chartkick';
import Chart from 'chart.js';
import { Image } from 'semantic-ui-react';

import AppMenu from './AppMenu';
import ForecastPage from './forecast/ForecastPage';
import './App.css';
import WelcomePage from './WelcomePage';
import NotFoundPage from './NotFoundPage';

ReactChartkick.addAdapter(Chart);

class App extends Component {

  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <div className="appTitle">
            WeatherApp
            </div>
          <video autoPlay loop muted>
              <source src="/HeaderVideo.mp4" type="video/mp4" />
            </video>
        </header>
          <div className="content">
            <BrowserRouter>
              <div>
                <AppMenu />
                <Switch>
                  <Route exact path="/" component={WelcomePage} />
                  <Route path="/forecast" component={ForecastPage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </div>
            </BrowserRouter>
          </div>
          <div className="footer">
            <div>
              <Image src='/SH_logo.svg' avatar />
            </div>
            © Created by Snowhound
        </div>
      </div>
        );
      }
    }
    
    
    
    export default App;
