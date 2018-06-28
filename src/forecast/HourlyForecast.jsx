import React from 'react';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { LineChart } from 'react-chartkick';
import PropTypes from 'prop-types';

import { fullDays } from '../services/DateUtil';



const HourlyForecast = (props) => {
    return (
        <Container>
            <Dimmer active={props.loading} inverted>
                <Loader inverted>Loading</Loader>
            </Dimmer>
            <h2>{fullDays[props.day.day()]}'s weather</h2>
            <HourlyLineChart 
            loading={props.loading}
            forecasts={props.forecasts}
            />
        </Container>
    );
}

const mapForecastToChart = (hourlyForecasts) => {
    const chartData = {};
    hourlyForecasts.map((forecast) => {
        return chartData[forecast.time] = forecast.temp
    });
    return chartData;
}

const HourlyLineChart = (props) => {
    if (!props.loading) {
        return <LineChart data={mapForecastToChart(props.forecasts)} />
    }
    return null;
}

HourlyForecast.propTypes = {
    forecasts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default HourlyForecast;