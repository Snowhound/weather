import React from 'react';
import { Card } from 'semantic-ui-react';

import CurrentForecast from './forecast/CurrentForecast';

class WelcomePage extends React.Component {
    render() {
        return (
            <div>
                <Card.Group className="group" centered>
                    <CurrentForecast city="Tartu" />
                    <CurrentForecast city="Tallinn" />
                </Card.Group>
            </div>
        );
    }
}

export default WelcomePage;