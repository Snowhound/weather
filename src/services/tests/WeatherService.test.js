import moxios from 'moxios';
import API, { baseURL, defaultParams } from '../API';

import { getDailyForecastFromAPI, getDayFromTimestamp, roundTo } from '../WeatherService';

const exampleData = {
    "city": {
        "id": 588335,
        "name": "Tartu",
        "coord": {
            "lon": 26.7238,
            "lat": 58.3727
        },
        "country": "EE",
        "population": 101092
    },
    "cod": "200",
    "message": 0.2933985,
    "cnt": 5,
    "list": [
        {
            "dt": 1529920800,
            "temp": {
                "day": 16,
                "min": 11.3,
                "max": 17.58,
                "night": 11.3,
                "eve": 16.57,
                "morn": 16
            },
            "pressure": 1018.48,
            "humidity": 85,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "speed": 6.51,
            "deg": 191,
            "clouds": 12
        },
        {
            "dt": 1530007200,
            "temp": {
                "day": 19.38,
                "min": 11.47,
                "max": 21.23,
                "night": 15.37,
                "eve": 21.23,
                "morn": 11.47
            },
            "pressure": 1030.13,
            "humidity": 87,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "sky is clear",
                    "icon": "01d"
                }
            ],
            "speed": 2.21,
            "deg": 175,
            "clouds": 0
        },
        {
            "dt": 1530093600,
            "temp": {
                "day": 22.48,
                "min": 13.45,
                "max": 23.34,
                "night": 15.75,
                "eve": 23.31,
                "morn": 13.45
            },
            "pressure": 1034.64,
            "humidity": 74,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "speed": 2.05,
            "deg": 295,
            "clouds": 12
        },
        {
            "dt": 1530180000,
            "temp": {
                "day": 22.77,
                "min": 13.58,
                "max": 24.6,
                "night": 16.47,
                "eve": 24.6,
                "morn": 13.58
            },
            "pressure": 1031.62,
            "humidity": 72,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "sky is clear",
                    "icon": "01d"
                }
            ],
            "speed": 2.01,
            "deg": 14,
            "clouds": 0
        },
        {
            "dt": 1530266400,
            "temp": {
                "day": 28.42,
                "min": 20.02,
                "max": 28.42,
                "night": 20.02,
                "eve": 26.43,
                "morn": 23.62
            },
            "pressure": 1018.64,
            "humidity": 0,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "sky is clear",
                    "icon": "01d"
                }
            ],
            "speed": 5.16,
            "deg": 120,
            "clouds": 0
        }
    ]
}

const expectedItem = {
    day: "Mon",
    description: "few clouds",
    iconId: "801",
    maxDegree: "17.6",
    minDegree: "11.3"
};

describe('WeatherService', () => {

    beforeEach(() => moxios.install(API));
    afterEach(() => moxios.uninstall(API));

    it('getDailyForecastFromAPI', () => {
        const url = baseURL + '/forecast/daily?units=metric&APPID=886268d885e2614466725dcf8b9589c5&q=Tartu,EE&cnt=5';
        moxios.stubRequest(url, {
            response: exampleData
        });

        return getDailyForecastFromAPI("Tartu").then((dailyForecast) => {
            expect(5).toEqual(dailyForecast.length);
            expect(expectedItem).toEqual(dailyForecast[0]);
        });
    })

    it('getDayFromTimestamp', () => {
        expect("Sat").toEqual(getDayFromTimestamp(1487415600));
    })
})