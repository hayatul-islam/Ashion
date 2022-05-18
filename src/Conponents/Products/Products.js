import React, { useEffect, useState } from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(products);
    return (
        <div className='py-5'>
            <Container>
                <div className='d-flex justify-content-between pb-5'>
                    <h5>New Product</h5>
                    <div>
                        <Nav className='text-capitalize'>
                            <Nav.Item>
                                <Nav.Link >All</Nav.Link>
                            </Nav.Item>
                            {
                                categories?.map(category => <Nav.Item> <Nav.Link eventKey="link-1">{category}</Nav.Link>
                                </Nav.Item>)
                            }
                        </Nav>
                    </div>
                </div>
                <Row>
                    {
                        products?.map(product => <Product key={product?.id} product={product} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;