import React from 'react';
import { Card, Dimmer, Loader, Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ForecastCard from './ForecastCard';

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
            <Header as='h2'>Forecast of {props.cityName}</Header>
            <Dimmer active={props.loading} inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
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
    loading: PropTypes.bool.isRequired
}

export default DailyForecast;