import React from 'react';
import { Col, Row, NavLink } from 'react-bootstrap';
import './TopBanner.css';
import { useNavigate } from 'react-router-dom';

const TopBanner = () => {
    const navigate = useNavigate()
    const handleShop = () => {
        navigate('/shop')
    }
    return (
        <div>
            <Row className='py-2'>
                <Col md={6}>
                    <div className='women px-5'>
                        <div>
                            <h2 style={{ fontFamily: 'Cookie', fontSize: '60px' }}>Women's Fashion</h2>
                            <p className='fs-5 pt-3'>We provide industry-leading next-generation clinical decision support approaches that leverage the genetic information.</p>
                            <NavLink onClick={handleShop} className='text-uppercase text-black ps-0 fs-5'>Shop Now</NavLink>
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
                                    <NavLink onClick={handleShop} className='text-uppercase text-black ps-0 fs-5'>Shop Now</NavLink>
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
                                    <NavLink onClick={handleShop} className='text-uppercase text-black ps-0 fs-5'>Shop Now</NavLink>
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
                                    <NavLink onClick={handleShop} className='text-uppercase text-black ps-0 fs-5'>Shop Now</NavLink>
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
                                    <NavLink onClick={handleShop} className='text-uppercase text-black ps-0 fs-5'>Shop Now</NavLink>
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