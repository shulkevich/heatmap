import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Chart from './chart.js';

export default class Heatmap extends Component {
    render() {
        const {id, data, style, setProps} = this.props;
        return (
            <Chart data={data} container_id={id} style={style}/>
        );
    }
}

Heatmap.defaultProps = {};

Heatmap.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * data to display in the heatmap. It is array of arrays of numbers.
     */
    data: PropTypes.array,

    /**
     * style properties.
     */
    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
