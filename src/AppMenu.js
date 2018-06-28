import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class AppMenu extends React.Component {

    render() {
        return (
            <Menu pointing secondary>
                <Menu.Item
                    name='Home'
                    onClick={() => {
                        this.props.history.push("");
                    }}
                />
                <Menu.Item
                    name='Tartu'
                    onClick={() => {
                        this.props.history.push("/forecast/tartu");
                    }}
                />
                <Menu.Item
                    name='Tallinn'
                    onClick={() => {
                        this.props.history.push("/forecast/tallinn");
                    }}
                />
            </Menu>
        );
    }
}

export default withRouter(AppMenu);