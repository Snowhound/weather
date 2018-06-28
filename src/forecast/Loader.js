import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const AppLoader = (props) => {
    return (
        <Dimmer active={props.loading} inverted>
            <Loader inverted>Loading</Loader>
        </Dimmer>
    );
}

AppLoader.propTypes = {
    loading: PropTypes.bool.isRequired
}

export default AppLoader;