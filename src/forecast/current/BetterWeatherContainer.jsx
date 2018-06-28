import { connect } from 'react-redux';
import { currentForecastByCity } from './CurrentForecastReducer';
import BetterWeatherCity from './BetterWeatherCity';

const getCityWithBetterWeather = (state) => {
    const tartu = currentForecastByCity(state, 'tartu');
    const tallinn = currentForecastByCity(state, 'tallinn');
    
    if (tartu.temp > tallinn.temp) {
        return "Tartu";
    }
    return "Tallinn";
}

const mapStateToProps = (state) => {
    return {
        betterWeatherCity: getCityWithBetterWeather(state)
    }
};


export default connect(mapStateToProps)(BetterWeatherCity);