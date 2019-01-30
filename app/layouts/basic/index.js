import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BasicFooter, BasicHeader, BasicMenu } from './components';
import './index.scss';

class BasicLayout extends Component {
    static propTypes = {
        children: PropTypes.node
    };

    render() {
        const { children } = this.props;
        return (
            <div className='basic'>
                <div className='basic__hd'>
                    <BasicHeader />
                </div>
                <div className='basic__bd'>
                    <div className='basic__bd__menu'>
                        <BasicMenu />
                    </div>
                    <div className='basic__bd__main'>
                        <div style={{ padding: 15 }}>
                            {children}
                        </div>
                        <div className='basic__bd__ft'>
                            <BasicFooter />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BasicLayout;
