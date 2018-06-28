import { combineReducers } from 'redux';
import CurrentForecastReducer from './current/CurrentForecastReducer';
import DailyForecastReducer from './daily/DailyForecastReducer';
import HourlyForecastReducer from './hourly/HourlyForecastReducer';

const ForecastReducer = combineReducers({
    current: CurrentForecastReducer,
    daily: DailyForecastReducer,
    hourly: HourlyForecastReducer
});

export default ForecastReducer;