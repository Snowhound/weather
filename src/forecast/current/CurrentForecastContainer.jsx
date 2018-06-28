import { connect } from 'react-redux';
import CurrentForecast from './CurrentForecast';
import { currentForecastByCity } from './CurrentForecastReducer';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const mapStateToProps = (state, props) => {
    return {
        city: props.city,
        cityName: capitalizeFirstLetter(props.city),
        forecast: currentForecastByCity(state, props.city),
    }
};


export default connect(mapStateToProps)(CurrentForecast);