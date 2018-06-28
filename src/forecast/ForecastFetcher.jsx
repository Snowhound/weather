import React from 'react';

class ForecastFetcher extends React.Component {
    componentWillReceiveProps(props) {
        this.fetchIfNeeded(props);
    }
    componentWillMount() {
        this.fetchIfNeeded(this.props);
    }

    fetchIfNeeded(props) {
        if(props.updateNeeded) {
            props.fetch(props.city);
        }
    }

    render() { 
        return null 
    };
}

export default ForecastFetcher;