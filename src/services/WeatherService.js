import { dateFromTimestamp, weekDayStrFromTimestamp } from "./DateUtil";

import API from './API';

export const getDailyForecast = (city) => {
    const params = { q: `${city},EE`, cnt: "5" };

    return API.get('/forecast/daily', { params: params })
        .then((response) => mapDailyForecast(response.data))
        .catch(console.error);

}

export const getHourlyForecast = (city, day) => {
    const params = { q: `${city},EE` };

    return API.get('/forecast', { params: params })
        .then((response) => mapHourlyForecast(response.data, day))
        .catch(console.error);

}

export const getCurrentForecast = (city) => {
    const params = { q: `${city},EE`};

    return API.get('/weather', { params: params })
        .then((response) => mapCurrentForecast(response.data))
        .catch(console.error);
}

const mapDailyForecast = (data) => {
    const dailyForecast = data.list.map((listItem) => {
        const weather = listItem.weather[0];
        return {
            day: weekDayStrFromTimestamp(listItem.dt),
            minDegree: listItem.temp.min.toFixed(1),
            maxDegree: listItem.temp.max.toFixed(1),
            iconId: weather.id.toString(),
            description: weather.description
        };
    });
    return dailyForecast;
}

export const mapHourlyForecast = (data, day) => {

    const filteredByDay = data.list.filter((listItem) => {
        return dateFromTimestamp(listItem.dt).startOf('day').isSame(day);
    });

    const results = filteredByDay.map((listItem) => {
        const weather = listItem.weather[0];
        const time = dateFromTimestamp(listItem.dt).format('HH:mm');
        return {
            time: time,
            minDegree: listItem.main.temp_min.toFixed(1),
            maxDegree: listItem.main.temp_max.toFixed(1),
            temp: listItem.main.temp,
            iconId: weather.id.toString(),
            description: weather.description
        };
    });
  
    return results;
}

export const mapCurrentForecast = (data) => {
    return ({
        temp: data.main.temp,
        description: data.weather[0].description,
        iconId: data.weather[0].id.toString()
    });
}