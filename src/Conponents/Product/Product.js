import React from 'react';
import { Card, Col } from 'react-bootstrap';
import StarRatings from 'react-star-ratings/build/star-ratings';
import './Product.css';

const Product = ({ product }) => {
    const { title, image, price, rating } = product;
    return (
        <Col md={3}>
            <Card className='mb-3 product'>
                <Card.Img style={{ height: '400px' }} variant="top" src={image} />
                <Card.Body className='text-center'>
                    <Card.Title className='fs-4 mb-3'>{title.slice(0, 20)}..</Card.Title>
                    <Card.Text> <StarRatings
                        rating={rating?.rate}
                        starDimension="24px"
                        starSpacing="5px"
                        starRatedColor="orange"
                    /> </Card.Text>
                    <Card.Text className='fs-4 fw-bold text-dark'>$ {price}</Card.Text>
                </Card.Body>
                <div className='fs-4 shopIcon'>
                    <span><i className="fa-solid fa-heart"></i></span>
                    <span><i className="fa-solid fa-bag-shopping"></i></span>
                </div>
            </Card>
        </Col>
    );
};

export default Product;