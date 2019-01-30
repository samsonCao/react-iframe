import React, { Component } from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line
import {
    Grid,
    Card
} from '@alifd/next';
import './index.scss';

const { Row, Col } = Grid;

class Home extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Row gutter={15} style={{ marginBottom: 15 }}>
                    <Col span='8'>
                        <Card className='image-card' contentHeight='auto'>
                            <img src='http://pic5.photophoto.cn/20071218/0008020869089891_b.jpg'
                                alt='Spring Festival'
                                className='img'
                            />
                            <div className='custom-card'>
                                <h3>Spring Festival</h3>
                                <p>Happy new year</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card className='image-card' contentHeight='auto'>
                            <img src='http://pic5.photophoto.cn/20071218/0008020869089891_b.jpg'
                                alt='Spring Festival'
                                className='img'
                            />
                            <div className='custom-card'>
                                <h3>Spring Festival</h3>
                                <p>Happy new year</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card className='image-card' contentHeight='auto'>
                            <img src='http://pic5.photophoto.cn/20071218/0008020869089891_b.jpg'
                                alt='Spring Festival'
                                className='img'
                            />
                            <div className='custom-card'>
                                <h3>Spring Festival</h3>
                                <p>Happy new year</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={15} style={{ marginBottom: 15 }}>
                    <Col span='8'>
                        <Card className='image-card' contentHeight='auto'>
                            <img src='http://pic5.photophoto.cn/20071218/0008020869089891_b.jpg'
                                alt='Spring Festival'
                                className='img'
                            />
                            <div className='custom-card'>
                                <h3>Spring Festival</h3>
                                <p>Happy new year</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card className='image-card' contentHeight='auto'>
                            <img src='http://pic5.photophoto.cn/20071218/0008020869089891_b.jpg'
                                alt='Spring Festival'
                                className='img'
                            />
                            <div className='custom-card'>
                                <h3>Spring Festival</h3>
                                <p>Happy new year</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card className='image-card' contentHeight='auto'>
                            <img src='http://pic5.photophoto.cn/20071218/0008020869089891_b.jpg'
                                alt='Spring Festival'
                                className='img'
                            />
                            <div className='custom-card'>
                                <h3>Spring Festival</h3>
                                <p>Happy new year</p>
                            </div>
                        </Card>
                    </Col>

                </Row>
                <Row gutter={15} style={{ marginBottom: 15 }}>
                    <Col span='8'>
                        <Card className='image-card' contentHeight='auto'>
                            <img src='http://pic5.photophoto.cn/20071218/0008020869089891_b.jpg'
                                alt='Spring Festival'
                                className='img'
                            />
                            <div className='custom-card'>
                                <h3>Spring Festival</h3>
                                <p>Happy new year</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card className='image-card' contentHeight='auto'>
                            <img src='http://pic5.photophoto.cn/20071218/0008020869089891_b.jpg'
                                alt='Spring Festival'
                                className='img'
                            />
                            <div className='custom-card'>
                                <h3>Spring Festival</h3>
                                <p>Happy new year</p>
                            </div>
                        </Card>
                    </Col>
                    <Col span='8'>
                        <Card className='image-card' contentHeight='auto'>
                            <img src='http://pic5.photophoto.cn/20071218/0008020869089891_b.jpg'
                                alt='Spring Festival'
                                className='img'
                            />
                            <div className='custom-card'>
                                <h3>Spring Festival</h3>
                                <p>Happy new year</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;
