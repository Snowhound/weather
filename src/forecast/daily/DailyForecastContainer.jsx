import { connect } from 'react-redux';
import DailyForecast from './DailyForecast';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const forecastsByCity = (state, city) => {
    return state.forecast.daily.forecastsPerCity[city] || [];
} 

const mapStateToProps = (state, props) => {
    const city = props.match.params.city || "tartu";
    return {
        city: city,
        cityName: capitalizeFirstLetter(city),
        forecasts: forecastsByCity(state, city),
    }
};


export default connect(mapStateToProps)(DailyForecast);