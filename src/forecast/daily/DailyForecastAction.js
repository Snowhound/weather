import { getDailyForecast } from '../../services/WeatherService';

const fetchDailyForecastRequest = (city) => {
    return {
        type: 'FETCH_DAILY_FORECASTS_REQUEST',
        city: city
    }
};

const fetchDailyForecastSuccess = (city, forecasts) => {
    return {
        type: 'FETCH_DAILY_FORECASTS_SUCCESS',
        city: city,
        forecasts: forecasts
    }
};

const fetchDailyForecastFailure = (error) => {
    return {
        type: 'FETCH_DAILY_FORECASTS_FAILURE',
        error: error
    }
};

export const fetchDailyForecast = (city) => {
    return (dispatch) => {
        dispatch(fetchDailyForecastRequest(city));
        return getDailyForecast(city)
            .then(forecasts => {
                dispatch(fetchDailyForecastSuccess(city, forecasts));
            })
            .catch(err => {
                dispatch(fetchDailyForecastFailure(err));
            });
    }
};