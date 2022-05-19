import { Modal, Button, Nav, Badge, Row, Col, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const AddToCard = ({ products }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [getId, setGetId] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("id"));
        setGetId(id)
    }, [update])


    const price = products.map(p => parseFloat(p?.price));
    const total = price?.reduce((prev, curr) => prev + curr, 0);

    const handleRemove = (id) => {
        const removeId = getId?.find(e => e === id);
        const filterId = getId?.filter(id => id !== removeId);
        localStorage.setItem("id", JSON.stringify(filterId));
        setUpdate(true);
    }

    const handleOrder = () => {
        localStorage.removeItem("id");
        setShow(false);
        setUpdate(true);
    }

    return (
        <div>
            <Nav.Link onClick={handleShow} className='text-uppercase fw-bold pe-3 fs-5' ><i class="fa-solid fa-bag-shopping"></i>
                <Badge className='text-danger p-0' bg='none'>{getId?.length}</Badge>
            </Nav.Link>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='fs-2'>All Items</Modal.Title>
                </Modal.Header>
                {
                    products.map(p => <Modal.Body>
                        <Row style={{ borderBottom: '1px solid #ddd', paddingBottom: '15px' }}>
                            <Col md={3}>
                                <div className='text-center'>
                                    <Image style={{ height: '100px', width: '100px' }} className='img-fluid' src={p.image} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div>
                                    <h4>{p?.title}</h4>
                                    <h5>$ {p?.price}</h5>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='text-end p-3'>
                                    <i onClick={() => handleRemove(p?.id)} className="fa-solid fa-xmark fs-5"></i>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    )
                }
                <div className='p-3 d-flex justify-content-between align-items-center'>
                    <h2>Total: ${total.toFixed(2)}</h2>
                    <Button onClick={handleOrder} className='py-3 px-5 fs-4 bg-warning border-0'>Place Order</Button>
                </div>
            </Modal>
        </div>
    );
};

export default AddToCard;