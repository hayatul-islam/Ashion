import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = ({ product }) => {
    const { title, image, price, rating } = product;
    return (
        <Col md={3}>
            <Card className='mb-3'>
                <Card.Img style={{ height: '400px' }} variant="top" src={image} />
                <Card.Body className='text-center'>
                    <Card.Title>{title.slice(0, 20)}..</Card.Title>
                    <Card.Text>{rating?.rate}</Card.Text>
                    <Card.Text>${price}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;