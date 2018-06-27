import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import CurrentForecast from './forecast/CurrentForecast';

class WelcomePage extends React.Component {
    render() {
        return (
            <div>
                <Card.Group className="group" centered>
                    <Link
                        to={"/forecast/tartu"}
                    >
                        <CurrentForecast city="Tartu" />
                    </Link>
                    <Link
                        to={"/forecast/tallinn"}
                    >
                        <CurrentForecast city="Tallinn" />
                    </Link>

                </Card.Group>
            </div>
        );
    }
}

export default WelcomePage;