import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

import './App.css';
import ForecastCard from './ForecastCard';
import { getDailyForecast } from './services/WeatherService';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: []
    }
  }

  componentWillMount() {
    this.setState({
      forecasts: getDailyForecast()
    })
  }

  onClick(e) {
    console.log("Clicked");
  }

  fiveDayForecast() {
    return (
      <Card.Group className="group">
        {this.state.forecasts.map((forecast) => this.renderDailyForecast(forecast))}
      </Card.Group>
    );
  }

  renderDailyForecast(forecast) {
    return (
      <ForecastCard
        key={forecast.day}
        forecast={forecast}
        onClick={this.onClick}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">WeatherApp</h1>
        </header>
        <div className="App-intro">
          {this.fiveDayForecast()}
        </div>
      </div>
    );
  }
}

export default App;
