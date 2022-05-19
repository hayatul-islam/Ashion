import React from 'react';
import { Col, NavLink, Row } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div>
            <Row className='py-2'>
                <Col md={6}>
                    <div className='women px-5'>
                        <div>
                            <h2 style={{ fontFamily: 'Cookie', fontSize: '60px' }}>Women's Fashion</h2>
                            <p className='fs-5 pt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eum eligendi blanditiis doloremque?</p>
                            <NavLink className='text-uppercase text-black ps-0 fs-5'>Shop Now</NavLink>
                            <div>
                                <hr style={{ width: '104px', padding: '1.6px 0', marginTop: '-5px', background: 'red', }} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={6} className="px-0 pb-2">
                            <div className='mens fashion px-5'>
                                <div>
                                    <h2>Men's Fashion</h2>
                                    <p className='fs-5 pt-0'>383 items</p>
                                    <NavLink className='text-uppercase text-black ps-0 fs-5'>Shop Now</NavLink>
                                    <div>
                                        <hr style={{ width: '104px', padding: '1.6px 0', marginTop: '-5px', background: 'red', }} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="pb-2">
                            <div className='kids fashion px-5'>
                                <div>
                                    <h2>Kid's Fashion</h2>
                                    <p className='fs-5 pt-0'>383 items</p>
                                    <NavLink className='text-uppercase text-black ps-0 fs-5'>Shop Now</NavLink>
                                    <div>
                                        <hr style={{ width: '104px', padding: '1.6px 0', marginTop: '-5px', background: 'red', }} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="px-0 pb-2">
                            <div className='cosmetics fashion px-5'>
                                <div>
                                    <h2>Cosmetics</h2>
                                    <p className='fs-5 pt-0'>383 items</p>
                                    <NavLink className='text-uppercase text-black ps-0 fs-5'>Shop Now</NavLink>
                                    <div>
                                        <hr style={{ width: '104px', padding: '1.6px 0', marginTop: '-5px', background: 'red', }} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='accessories fashion px-5'>
                                <div>
                                    <h2>Accessories</h2>
                                    <p className='fs-5 pt-0'>383 items</p>
                                    <NavLink className='text-uppercase text-black ps-0 fs-5'>Shop Now</NavLink>
                                    <div>
                                        <hr style={{ width: '104px', padding: '1.6px 0', marginTop: '-5px', background: 'red', }} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default TopBanner;