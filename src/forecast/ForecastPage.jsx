import React from 'react';
import { Route } from 'react-router-dom';

import DailyForecast from './daily/DailyForecastContainer';
import HourlyForecastContainer from './hourly/HourlyForecastContainer';

const ForecastPage = ({match}) => {
    return (
        <div>
            <Route path={`${match.url}/:city`} component={DailyForecast} />
            <Route exact path={`${match.url}/:city/hourly/:index`} component={HourlyForecastContainer} />
        </div>
    );
}

export default ForecastPage;
