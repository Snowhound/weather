import moxios from 'moxios';
import moment from 'moment';

import API, { baseURL } from '../API';
import { weekDayStrFromTimestamp, dateFromTimestamp } from "../DateUtil";
import { getDailyForecast, mapHourlyForecast, getHourlyForecast } from '../WeatherService';
import dailyTestData from './dailyTestData';
import hourlyTestData from './hourlyTestData';
import currentTestData from './currentTestData';

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

    it('getDailyForecast', () => {
        const url = baseURL + '/forecast/daily?units=metric&APPID=886268d885e2614466725dcf8b9589c5&q=Tartu,EE&cnt=5';
        moxios.stubRequest(url, {
            response: dailyTestData
        });

        return getDailyForecast("Tartu").then((dailyForecast) => {
            expect(5).toEqual(dailyForecast.length);
            expect(expectedItem).toEqual(dailyForecast[0]);
        });
    })

    it('getDayFromTimestamp', () => {
        expect("Sat").toEqual(weekDayStrFromTimestamp(1487415600));
    })

    it('mapHourlyForecast', () => {
        const day = moment().year(2018).month(6).date(1).startOf('day');
        const expected = [
            { "description": "few clouds", "iconId": "801", "maxDegree": "14.8", "minDegree": "14.8", "temp": 14.82, "time": "00:00" },
            { "description": "scattered clouds", "iconId": "802", "maxDegree": "14.0", "minDegree": "14.0", "temp": 14, "time": "03:00" },
            { "description": "light rain", "iconId": "500", "maxDegree": "15.3", "minDegree": "15.3", "temp": 15.33, "time": "06:00" },
            { "description": "light rain", "iconId": "500", "maxDegree": "16.3", "minDegree": "16.3", "temp": 16.32, "time": "09:00" }
        ];

        expect(expected).toEqual(mapHourlyForecast(hourlyTestData, day));
    })

    it('getHourlyForecast', () => {
        const url = baseURL + '/forecast?units=metric&APPID=886268d885e2614466725dcf8b9589c5&q=Tartu,EE';
        moxios.stubRequest(url, {
            response: hourlyTestData
        });

        const day = moment().year(2018).month(5).date(26).startOf('day');
        const expected = {
            time: "12:00",
            minDegree: 19.42.toFixed(1),
            maxDegree: 20.24.toFixed(1),
            temp: 20.24,
            iconId: "800",
            description: "clear sky"
        };

        return getHourlyForecast("Tartu", day).then((hourlyForecast) => {
            expect(hourlyForecast[0]).toEqual(expected);
        });
    })

    it('getCurrentForecast', () => {
        const url = baseURL + '/weather?units=metric&APPID=886268d885e2614466725dcf8b9589c5&q=Tartu,EE';
        moxios.stubRequest(url, {
            response: currentTestData
        });

        const expected = {
            time: "12:00",
            minDegree: 19.42.toFixed(1),
            maxDegree: 20.24.toFixed(1),
            temp: 20.24,
            iconId: "800",
            description: "clear sky"
        };

        return getHourlyForecast("Tartu", day).then((hourlyForecast) => {
            expect(hourlyForecast[0]).toEqual(expected);
        });
    })
})