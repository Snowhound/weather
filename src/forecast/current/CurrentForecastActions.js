import { getCurrentForecast } from '../../services/WeatherService';

const fetchCurrentForecastRequest = (city) => {
    return {
        type: 'FETCH_CURRENT_FORECASTS_REQUEST',
        city: city
    }
};

const fetchCurrentForecastSuccess = (city, forecasts) => {
    return {
        type: 'FETCH_CURRENT_FORECASTS_SUCCESS',
        city: city,
        forecasts: forecasts
    }
};

const fetchCurrentForecastFailure = (error) => {
    return {
        type: 'FETCH_CURRENT_FORECASTS_FAILURE',
        error: error
    }
};

export const fetchCurrentForecast = (city) => {
    return (dispatch) => {
        dispatch(fetchCurrentForecastRequest(city));
        return getCurrentForecast(city)
            .then(forecasts => {
                dispatch(fetchCurrentForecastSuccess(city, forecasts));
            })
            .catch(err => {
                dispatch(fetchCurrentForecastFailure(err));
            });
    }
};