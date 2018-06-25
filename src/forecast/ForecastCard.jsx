import React from 'react';
import { Card } from 'semantic-ui-react';
import WeatherIcon from 'react-icons-weather';

const ForecastCard = ({ forecast, onClick }) => {
  return (
    <div className="weatherCard">
      <Card onClick={onClick}>
        <Card.Header>{forecast.day}</Card.Header>
        <Card.Meta>{forecast.description}</Card.Meta>
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
    </div>
  );
}

const WeatherComponent = (props) => {
  return (
    <div className="icon">
      <WeatherIcon name="owm" iconId={props.iconId} flip="horizontal" rotate="90" />
    </div>
  )
}

export default ForecastCard;