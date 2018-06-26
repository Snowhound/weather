import React, { Component } from 'react';
import { Card, Dimmer, Loader, Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import ForecastCard from './ForecastCard';
import { getDailyForecast } from '../services/WeatherService';


class ForecastPage extends Component {
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

    onClick(e) {

    }

    fiveDayForecast() {
        return (
            <Card.Group className="group">
                {this.state.forecasts.map((forecast) => this.renderDailyForecast(forecast))}
            </Card.Group>
        );
    }

    renderDailyForecast(forecast) {
        return (
            <Link key={forecast.day} to={`/forecast/${this.state.city}/hourly`}>
                <ForecastCard
                    forecast={forecast}
                />
            </Link>
        );
    }

    render() {
        return (
            <Container>
                <Header as='h2'>Forecast of {this.state.cityName}</Header>
                <Dimmer active={this.state.loading} inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>

                {this.fiveDayForecast()}
            </Container>
        );
    }
}

export default ForecastPage;
