import { combineReducers } from 'redux';
import CurrentForecastReducer from './current/CurrentForecastReducer';

const ForecastReducer = combineReducers({
    current: CurrentForecastReducer
});

export default ForecastReducer;