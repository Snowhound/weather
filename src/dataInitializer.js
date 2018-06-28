import { fetchCurrentForecast } from './forecast/current/CurrentForecastActions';
import { fetchDailyForecast } from './forecast/daily/DailyForecastAction';
import { fetchHourlyForecast } from './forecast/hourly/HourlyForecastAction';

const initializeApiData = (store) => {
    store.dispatch(fetchCurrentForecast('tartu'));
    store.dispatch(fetchCurrentForecast('tallinn'));
    store.dispatch(fetchDailyForecast('tartu'));
    store.dispatch(fetchDailyForecast('tallinn'));
    store.dispatch(fetchHourlyForecast('tartu'));
    store.dispatch(fetchHourlyForecast('tallinn'));
}

export default initializeApiData;