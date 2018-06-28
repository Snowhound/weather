import React, { Component } from 'react';

import { getDailyForecast } from '../../services/WeatherService';
import DailyForecast from './DailyForecast';

class DailyForecastContainer extends Component {
    constructor(props) {
        super(props);
        const city = props.match.params.city || "tartu";
        this.state = this.initialState(city);
    }

    componentWillReceiveProps(props) {
        const city = props.match.params.city || "tartu";
        if (this.state.city !== city) {
            this.setState(this.initialState(city));
            this.updateForecasts();
        }
    }

    componentWillMount() {
        this.updateForecasts();
    }

    initialState(city) {
        return {
            loading: true,
            forecasts: [],
            city: city,
            cityName: this.capitalizeFirstLetter(city)
        }
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    updateForecasts() {
        getDailyForecast(this.state.cityName)
            .then((forecasts) => {
                this.setState({
                    loading: false,
                    forecasts: forecasts
                })
            });
    }

    render() {
        return (
            <DailyForecast
                city={this.state.city}
                forecasts={this.state.forecasts}
                loading={this.state.loading}
                cityName={this.state.cityName}
            />
        );
    }
}

export default DailyForecastContainer;
