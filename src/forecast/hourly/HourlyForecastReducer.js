import { merge } from 'ramda';

const initialState = {
    fetching: false,
    forecastsPerCity: {}
}


const HourlyForecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_HOURLY_FORECASTS_REQUEST':
            return merge(state, { fetching: true })
        case 'FETCH_HOURLY_FORECASTS_SUCCESS':
            const forecastsPerCity = merge(state.forecastsPerCity, { [action.city]: action.forecasts });
            return merge(state, { fetching: false, forecastsPerCity: forecastsPerCity });
        case 'FETCH_HOURLY_FORECASTS_FAILURE':
            return merge(state, { fetching: false })
        default:
            return state;
    }
}

export default HourlyForecastReducer;