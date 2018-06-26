import React, { Component } from 'react';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import moment from 'moment';
import { LineChart } from 'react-chartkick';

import { getHourlyForecast } from '../services/WeatherService';

class HourlyForecast extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState(props);
    }

    componentWillMount() {
        this.updateHourlyForecasts(this.state);
    }

    componentWillReceiveProps(props) {
        const city = props.match.params.city || "tartu";
        const index = props.match.params.index;
        if (this.state.city !== city || this.state.index !== index) {
            const state = this.initialState(props);
            this.setState(state);
            this.updateHourlyForecasts(state);
        }
    }

    initialState(props) {
        const city = props.match.params.city || "tartu";
        const index = props.match.params.index;
        const day = moment().add(index, 'd').startOf('day');
        return {
            loading: true,
            index: index,
            day: day,
            city: city,
            cityName: this.capitalizeFirstLetter(city),
            forecasts: []
        }
    }

    updateHourlyForecasts(state) {
        getHourlyForecast(state.cityName, state.day)
            .then((forecasts) => {
                this.setState({
                    loading: false,
                    forecasts: forecasts
                })
            });
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    mapForecastToChart() {
        const hourlyForecasts = this.state.forecasts;
        const chartData = {};
        hourlyForecasts.map((forecast) => {
            chartData[forecast.time] = forecast.temp
        });
        return chartData;
    }

    renderLineChart() {
        if (!this.state.loading) {
            return <LineChart data={this.mapForecastToChart()} />
        }
        return null;
    }

    render() {
        return (
            <Container>
                <Dimmer active={this.state.loading} inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
                {this.renderLineChart()}
            </Container>
        );
    }
}

export default HourlyForecast;