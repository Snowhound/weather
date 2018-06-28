import { connect } from 'react-redux';
import moment from 'moment';

import HourlyForecast from './HourlyForecast';

const forecastsByCityAndDay = (state, city, day) => {

    const forecastsByCity = state.forecast.hourly.forecastsPerCity[city] || [];
    return forecastsByCity.filter((forecast) => forecast.day.isSame(day))
} 

const mapStateToProps = (state, props) => {
    const city = props.match.params.city || "tartu";
    const index = props.match.params.index;
    const day = moment().add(index, 'd').startOf('day');
    
    return {
        day: day,
        city: city,
        forecasts: forecastsByCityAndDay(state, city, day),
        loading: state.forecast.daily.fetching
    }
};


export default connect(mapStateToProps)(HourlyForecast);