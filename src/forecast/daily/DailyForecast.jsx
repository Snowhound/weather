import React from 'react';
import { Card, Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ForecastCard from '../ForecastCard';
import DailyForecastFetcher from './DailyForecastFetcher';

const FiveDayForecast = (props) => {
    return (
        <Card.Group className="group" centered>
            {props.forecasts.map(
                (forecast, index) => {
                    return (
                        <DailyForecastCard
                            key={forecast.day}
                            forecast={forecast}
                            index={index}
                            city={props.city}
                        />);
                })
            }
        </Card.Group>
    );
}

const DailyForecastCard = ({ city, forecast, index }) => {
    return (
        <Link
            key={forecast.day}
            to={`/forecast/${city}/hourly/${index}`}
        >
            <ForecastCard
                forecast={forecast}
            />
        </Link>
    );
}

const DailyForecast = (props) => {
    return (
        <Container>
            <DailyForecastFetcher city={props.city} />
            <Header as='h2'>Forecast of {props.cityName}</Header>
            <FiveDayForecast
                city={props.city}
                forecasts={props.forecasts}
            />
        </Container>
    );
}

DailyForecast.propTypes = {
    city: PropTypes.string.isRequired,
    cityName: PropTypes.string.isRequired,
    forecasts: PropTypes.array.isRequired,
}

export default DailyForecast;