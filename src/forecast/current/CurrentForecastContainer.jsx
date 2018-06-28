import { connect } from 'react-redux';
import CurrentForecast from './CurrentForecast';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const forecastByCity = (state, city) => {
    return state.forecast.current.forecastsPerCity[city] || {};
} 

const mapStateToProps = (state, props) => {
    return {
        cityName: capitalizeFirstLetter(props.city),
        forecast: forecastByCity(state, props.city),
    }
};


export default connect(mapStateToProps)(CurrentForecast);