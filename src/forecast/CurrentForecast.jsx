import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { WeatherComponent } from './ForecastCard';

const CurrentForecast = (props) => {
    return (
        <div className="mainPageWeatherCard">
            <Card>
                <Card.Header className="cityName">{props.cityName}</Card.Header>
                <Card.Meta>{props.forecast.description}</Card.Meta>
                <CurrentWeatherComponent 
                    iconId = {props.forecast.iconId}
                />
                <div className="temperature">
                    {props.forecast.temp} °C
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

CurrentForecast.propTypes = {
    cityName: PropTypes.string.isRequired,
    forecast: PropTypes.object.isRequired,
}

export default CurrentForecast;