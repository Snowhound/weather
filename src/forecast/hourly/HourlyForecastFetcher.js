import { connect } from 'react-redux';
import ForecastFetcher from '../ForecastFetcher';
import { hourlyForecastsLoaded } from './HourlyForecastReducer';
import { fetchHourlyForecast } from './HourlyForecastAction';

const mapStateToProps = (state, props) => {
    return {
        city: props.city,
        updateNeeded: !hourlyForecastsLoaded(state, props.city)
    }
};

const mapDispatchToProps = dispatch => ({
    fetch: (city) => dispatch(fetchHourlyForecast(city)),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(ForecastFetcher);

