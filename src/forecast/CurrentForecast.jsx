import React from 'react';
import { Card } from 'semantic-ui-react';
import {WeatherComponent} from './ForecastCard';
import { getCurrentForecast } from '../services/WeatherService';

class CurrentForecast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast: {},
            cityName: this.capitalizeFirstLetter("Tartu"),
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
            <div className="weatherCard">
                <Card>
                    <Card.Meta>{this.state.forecast.description}</Card.Meta>
                    <Card.Content>
                        //iconId tuleb undefined, kuigi saadakse samast kohast, kust description (see tuleb välja)
                        <WeatherComponent iconId={this.state.forecast.iconId} />
                    </Card.Content>
                    {this.state.forecast.temp}
                </Card>
            </div>
        );
    }
}

export default CurrentForecast;