import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line

class BasicFooter extends Component {
    render() {
        return (
            <div className='basic-footer'>
                <span>© sam cao </span>
                <span>v1.0.1</span>
            </div>
        );
    }
}

BasicFooter.propTypes = {};

export default BasicFooter;
