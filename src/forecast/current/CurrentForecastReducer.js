import { merge } from 'ramda';

const initialState = {
    forecasts: {}
}

const CurrentForecastReducer = (state = initialState, action) => {        
    switch(action.type) {
        case 'FETCH_CURRENT_FORECASTS_REQUEST':
            return merge(state, {fetching: true})
        case 'FETCH_CURRENT_FORECASTS_SUCCESS':
            return merge(state, {fetching: false})
        case 'FETCH_CURRENT_FORECASTS_FAILURE':
            return merge(state, {fetching: false})
        default:
        return state;
    }
}

export default CurrentForecastReducer;