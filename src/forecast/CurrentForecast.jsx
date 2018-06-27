import React from 'react';
import { Card } from 'semantic-ui-react';
import { WeatherComponent } from './ForecastCard';
import { getCurrentForecast } from '../services/WeatherService';

class CurrentForecast extends React.Component {
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

    renderWeatherComponent() {
        if (this.state.forecast.iconId) {
            return (
                <Card.Content>
                    <div className="mainPageIcon">
                        <WeatherComponent iconId={this.state.forecast.iconId} />
                    </div>
                </Card.Content>
            );
        }
        return null;
    }

    render() {
        return (
            <div className="mainPageWeatherCard">
                <Card>
                    <Card.Header className="cityName">{this.state.cityName}</Card.Header>
                    <Card.Meta>{this.state.forecast.description}</Card.Meta>
                    {this.renderWeatherComponent()}
                    <div className="temperature">
                        {this.state.forecast.temp} °C
                    </div>
                </Card>
            </div>
        );
    }
}

export default CurrentForecast;