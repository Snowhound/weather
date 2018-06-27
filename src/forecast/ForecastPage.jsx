import React from 'react';
import { Route } from 'react-router-dom';

import DailyForecast from './DailyForecastContainer';
import HourlyForecast from './HourlyForecast';

const ForecastPage = ({match}) => {
    return (
        <div>
            <Route path={`${match.url}/:city`} component={DailyForecast} />
            <Route exact path={`${match.url}/:city/hourly/:index`} component={HourlyForecast} />
        </div>
    );
}

export default ForecastPage;
