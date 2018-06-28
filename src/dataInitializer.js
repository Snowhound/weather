import { fetchCurrentForecast } from './forecast/current/CurrentForecastActions';

const initializeApiData = (store) => {
    store.dispatch(fetchCurrentForecast('tartu'));
    store.dispatch(fetchCurrentForecast('tallinn'));
}

export default initializeApiData;