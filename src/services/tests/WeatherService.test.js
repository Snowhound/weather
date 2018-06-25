import { getDailyForecast, getDayFromTimestamp } from '../WeatherService';

const expectedItem = { day: "Thu", iconId: 800, maxDegree: 286.67, minDegree: 272.78 };

describe('WeatherService', () => {
    it('getDailyForecast', () => {
        const dailyForecast = getDailyForecast();
        expect(7).toEqual(dailyForecast.length);
        expect(expectedItem).toEqual(dailyForecast[0]);
    })

    it('getDayFromTimestamp', () => {
        expect("Sat").toEqual(getDayFromTimestamp(1487415600));
    })
})