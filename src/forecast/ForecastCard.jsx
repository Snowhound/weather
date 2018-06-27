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
          <div className="icon">
            <WeatherComponent iconId={forecast.iconId} />
          </div>
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

export const WeatherComponent = (props) => {
  return (
    <WeatherIcon name="owm" iconId={props.iconId} flip="horizontal" rotate="90" />
  )
}

export default ForecastCard;