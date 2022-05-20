import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <Header />
            <Container className='py-5'>
                <div className='pb-4'>
                    <h5 className='fs-1 '>All Products</h5>
                    <hr style={{ width: '50px', padding: '2px 0', marginTop: '0px', background: 'red' }} />
                </div>
                <Row>
                    {
                        products?.map(product => <Product key={product?.id} product={product} />)
                    }
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Shop;