import React, { Component } from 'react';
import moment from 'moment';

import HourlyForecast from './HourlyForecast';
import { getHourlyForecast } from '../services/WeatherService';

class HourlyForecastContainer extends Component {
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

    render() {
        return (
            <HourlyForecast 
            loading = {this.state.loading}
            forecasts={this.state.forecasts}
            day={this.state.day}
            />
        );
    }
}

export default HourlyForecastContainer;