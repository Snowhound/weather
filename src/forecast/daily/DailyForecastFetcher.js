import { connect } from 'react-redux';
import { fetchDailyForecast } from './DailyForecastAction';
import { dailyForecastsLoaded } from './DailyForecastReducer';
import ForecastFetcher from '../ForecastFetcher';

const mapStateToProps = (state, props) => {
    return {
        city: props.city,
        updateNeeded: !dailyForecastsLoaded(state, props.city)
    }
};

const mapDispatchToProps = dispatch => ({
    fetch: (city) => dispatch(fetchDailyForecast(city)),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(ForecastFetcher);

