import { merge } from 'ramda';

const initialState = {
    fetching: false,
    forecastsPerCity: {}
}

export const dailyForecastsByCity = (state, city) => {
    return state.forecast.daily.forecastsPerCity[city] || [];
}

export const dailyForecastsLoaded = (state, city) => {
    return !!state.forecast.daily.forecastsPerCity[city]
}


const DailyForecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DAILY_FORECASTS_REQUEST':
            return merge(state, { fetching: true })
        case 'FETCH_DAILY_FORECASTS_SUCCESS':
            const forecastsPerCity = merge(state.forecastsPerCity, { [action.city]: action.forecasts });
            return merge(state, { fetching: false, forecastsPerCity: forecastsPerCity });
        case 'FETCH_DAILY_FORECASTS_FAILURE':
            return merge(state, { fetching: false })
        default:
            return state;
    }
}

export default DailyForecastReducer;