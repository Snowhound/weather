import React from 'react';

import { getCurrentForecast } from '../services/WeatherService';
import CurrentForecast from './CurrentForecast';

class CurrentForecastContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast: {},
            cityName: this.capitalizeFirstLetter(this.props.city),
            loading: true
        }
    }

    componentWillMount() {
        this.updateForecasts();
    }

    updateForecasts() {
        return getCurrentForecast(this.state.cityName)
            .then((forecast) => {
                this.setState({
                    loading: false,
                    forecast: forecast
                })
            });
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <CurrentForecast 
            cityName = {this.state.cityName}
            description = {this.state.forecast.description}
            temp = {this.state.forecast.temp}
            iconId = {this.state.forecast.iconId}
            />

        );
    }
}

export default CurrentForecastContainer;