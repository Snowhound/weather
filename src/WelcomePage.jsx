import React from 'react';

import CurrentForecast from './forecast/CurrentForecast';

class WelcomePage extends React.Component {
    render() {
        return(
            <CurrentForecast />
        );
    }
}

export default WelcomePage;