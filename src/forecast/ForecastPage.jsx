import React, { Component } from 'react';
import { Card, Segment, Dimmer, Loader, Container, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import ForecastCard from './ForecastCard';
import { getDailyForecastFromAPI } from '../services/WeatherService';


class ForecastPage extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState(props);
    }

    componentWillReceiveProps(props) {
        if (this.props.city != props.city) {
            this.setState(this.initialState(props));
            this.updateForecasts();
        }
    }

    componentWillMount() {
        this.updateForecasts();
    }

    initialState(props) {
        const city = props.match.params.city || "tartu";
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
        getDailyForecastFromAPI(this.state.cityName)
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
            <Link to={`/forecast/${this.state.city}/hourly`}>
                <ForecastCard
                    key={forecast.day}
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
