import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

const initialState = {};

const composedEnhancers = compose(
    composeWithDevTools(
        applyMiddleware(thunk, routerMiddleware(history)),
    )
);

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
);

export default store;