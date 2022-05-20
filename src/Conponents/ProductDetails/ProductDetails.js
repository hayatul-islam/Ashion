import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Modal, Row } from 'react-bootstrap';
import StarRatings from 'react-star-ratings/build/star-ratings';

const ProductDetails = (id) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [details, setDetails] = useState({});
    const { image, price, title, description, rating } = details;
    const url = `https://fakestoreapi.com/products/${id?.id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <>
            <span>
                <i onClick={handleShow} class="fa-solid fa-ellipsis"></i>
            </span>
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header className='border-0' closeButton />
                <Container>
                    <Row className='px-4 pt-4 pb-5' closeButton>
                        <Col md={4}>
                            <div>
                                <Image style={{ height: '400px', width: '400px' }} className='img-fluid' src={image} />
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className='pt-5'>
                                <h3 className='mb-0'>{title}</h3>
                                <div className="d-flex">
                                    <StarRatings
                                        rating={rating?.rate}
                                        starDimension="20px"
                                        starSpacing="1px"
                                        starRatedColor="orange"
                                    />
                                    <p className='pt-1 ps-2 fw-bold'>({rating?.count} Rating)</p>
                                </div>
                                <p className='fs-5'>{description}</p>
                                <h3>Price: ${price}</h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal>
        </>
    );
};

export default ProductDetails;