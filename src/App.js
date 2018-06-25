import React, { Component } from 'react';
import './App.css';

import { Card, Icon, Image } from 'semantic-ui-react';
import WeatherIcon from 'react-icons-weather';



const WeatherComponent = (props) => {
  return (
    <div className="icon">
      <WeatherIcon name="owm" iconId={props.iconId} flip="horizontal" rotate="90" />
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecasts: [
        { day: "Mon", iconId: "200", maxDegree: "71", minDegree: "61" },
        { day: "Tue", iconId: "300", maxDegree: "71", minDegree: "61" },
        { day: "Wed", iconId: "800", maxDegree: "71", minDegree: "61" },
        { day: "Thu", iconId: "500", maxDegree: "71", minDegree: "61" },
        { day: "Fri", iconId: "600", maxDegree: "71", minDegree: "61" }
      ]
    }
  }

  fiveDayForecast() {
    return (
      <div>
        {this.state.forecasts.map((forecast) => this.renderDailyForecast(forecast))}
      </div>
    );
  }

  renderDailyForecast(forecast) {
    return (
      <ForecastCard
        key={forecast.day}
        forecast={forecast}
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

const ForecastCard = ({ forecast }) => {
  return (<Card>
    <Card.Header>{forecast.day}</Card.Header>
    <Card.Content>
      <WeatherComponent iconId={forecast.iconId} />
      <div>
        <span className="degree">
          {forecast.minDegree} °C
      </span>
        -
      <span className="degree">
          {forecast.maxDegree} °C
      </span>
      </div>
    </Card.Content>
  </Card>
  );
}

export default App;
