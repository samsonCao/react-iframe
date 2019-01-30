import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BlankLayout extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    render() {
        const { children } = this.props;
        return (
            <div style={{ width: '100%', height: '100%' }}>
                {children}
            </div>
        );
    }
}

export default BlankLayout;
