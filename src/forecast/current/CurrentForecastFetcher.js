import { connect } from 'react-redux';
import ForecastFetcher from '../ForecastFetcher';
import { fetchCurrentForecast } from './CurrentForecastActions';
import { currentForecastsLoaded } from './CurrentForecastReducer';

const mapStateToProps = (state, props) => {
    return {
        city: props.city,
        updateNeeded: !currentForecastsLoaded(state, props.city)
    }
};

const mapDispatchToProps = dispatch => ({
    fetch: (city) => dispatch(fetchCurrentForecast(city)),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(ForecastFetcher);

