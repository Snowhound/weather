import { connect } from 'react-redux';
import DailyForecast from './DailyForecast';
import { dailyForecastsByCity } from './DailyForecastReducer';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const mapStateToProps = (state, props) => {
    const city = props.match.params.city || "tartu";
    return {
        city: city,
        cityName: capitalizeFirstLetter(city),
        forecasts: dailyForecastsByCity(state, city),
    }
};


export default connect(mapStateToProps)(DailyForecast);