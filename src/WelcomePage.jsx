import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CurrentForecastContainer from './forecast/current/CurrentForecastContainer';

class WelcomePage extends React.Component {
    render() {
        return (
            <div>
                <Card.Group className="group" centered>
                    <Link to={"/forecast/tartu"} >
                        <CurrentForecastContainer city="tartu" />
                    </Link>
                    <Link to={"/forecast/tallinn"} >
                        <CurrentForecastContainer city="tallinn" />
                    </Link>

                </Card.Group>
            </div>
        );
    }
}

export default WelcomePage;