import { merge } from 'ramda';

const initialState = {
    forecastsPerCity: {}
}


const CurrentForecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CURRENT_FORECASTS_REQUEST':
            return merge(state, { fetching: true })
        case 'FETCH_CURRENT_FORECASTS_SUCCESS':
            const forecastsPerCity = merge(state.forecastsPerCity, { [action.city]: action.forecasts });
            return merge(state, { fetching: false, forecastsPerCity: forecastsPerCity });
        case 'FETCH_CURRENT_FORECASTS_FAILURE':
            return merge(state, { fetching: false })
        default:
            return state;
    }
}

export default CurrentForecastReducer;