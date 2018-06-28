import { connect } from 'react-redux';
import Loader from './Loader';

const mapStateToProps = ({forecast: {daily, hourly, current}}) => {
    const loading = daily.fetching || hourly.fetching || current.fetching;
    return {
        loading: loading
    }
};


export default connect(mapStateToProps)(Loader);