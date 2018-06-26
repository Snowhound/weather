import API from './API';
import moment from 'moment';

const days = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat"
}

export const getDailyForecast = (city) => {
    const params = {
        q: city + ",EE",
        cnt: "5"
    };

    const apiPromise = API.get('/forecast/daily', { params: params })
        .then((response) => mapDailyForecast(response.data))
        .catch(console.error);

    return apiPromise;

}

export const weekDayStrFromTimestamp = (dt) => {
    const date = new Date(dt * 1000); //From seconds to milliseconds
    const dayAsNumber = date.getDay();
    return days[dayAsNumber];
}

const dateFromTimestamp = (dt) => {
    return moment(dt * 1000);
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

    return filteredByDay.map((listItem) => {
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
}