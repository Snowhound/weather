import { combineReducers } from 'redux';
import ForecastReducer from './forecast/ForecastReducer';

export default combineReducers({
    forecast: ForecastReducer
});