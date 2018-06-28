import { getHourlyForecast } from '../../services/WeatherService';

const fetchHourlyForecastRequest = (city) => {
    return {
        type: 'FETCH_HOURLY_FORECASTS_REQUEST',
        city: city
    }
};

const fetchHourlyForecastSuccess = (city, forecasts) => {
    return {
        type: 'FETCH_HOURLY_FORECASTS_SUCCESS',
        city: city,
        forecasts: forecasts
    }
};

const fetchHourlyForecastFailure = (error) => {
    return {
        type: 'FETCH_HOURLY_FORECASTS_FAILURE',
        error: error
    }
};

export const fetchHourlyForecast = (city) => {
    return (dispatch) => {
        dispatch(fetchHourlyForecastRequest(city));
        return getHourlyForecast(city)
            .then(forecasts => {
                dispatch(fetchHourlyForecastSuccess(city, forecasts));
            })
            .catch(err => {
                dispatch(fetchHourlyForecastFailure(err));
            });
    }
};