import API from './API';

export const getDailyForecastFromAPI = (city) => {
    const params = {
        q: city + ",EE",
        cnt: "5"
    };

    const apiPromise = API.get('/forecast/daily', { params: params })
        .then((response) => {
            let forecast = mapDataToForecast(response.data);
            return forecast;
        })
        .catch((error) => {
            console.log(error);
        });

    return apiPromise;

}

const days = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat"
}

export const getDayFromTimestamp = (dt) => {
    const date = new Date(dt * 1000); //From seconds to milliseconds
    const dayAsNumber = date.getDay();
    return days[dayAsNumber];
}

const mapDataToForecast = (data) => {
    const dailyForecast = data.list.map((listItem) => {
        const weather = listItem.weather[0];
        return {
            day: getDayFromTimestamp(listItem.dt),
            minDegree: listItem.temp.min.toFixed(1),
            maxDegree: listItem.temp.max.toFixed(1),
            iconId: weather.id.toString(),
            description: weather.description
        };
    });
    return dailyForecast;
}