import React from 'react';
import { Card } from 'semantic-ui-react';

import { WeatherComponent } from './ForecastCard';

const CurrentForecast = (props) => {
    return (
        <div className="mainPageWeatherCard">
            <Card>
                <Card.Header className="cityName">{props.cityName}</Card.Header>
                <Card.Meta>{props.description}</Card.Meta>
                <CurrentWeatherComponent 
                iconId = {props.iconId}
                />
                <div className="temperature">
                    {props.temp} °C
                </div>
            </Card>
        </div>);
}

const CurrentWeatherComponent = (props) => {
    if (props.iconId) {
        return (
            <Card.Content>
                <div className="mainPageIcon">
                    <WeatherComponent iconId={props.iconId} />
                </div>
            </Card.Content>
        );
    }
    return null;
}

export default CurrentForecast;