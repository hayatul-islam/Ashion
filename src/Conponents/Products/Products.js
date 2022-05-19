import React, { useEffect, useState } from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('all');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                if (category === 'all') {
                    setProducts(data)
                } else {
                    const filterProducts = data?.filter(product => product?.category === category);
                    setProducts(filterProducts)
                }
            })
    }, [category])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(products);

    return (
        <div className='py-5'>
            <Container>
                <div className='d-flex justify-content-between align-item-center pb-5'>
                    <div>
                        <h5 className='fs-3 '>New Product</h5>
                        <hr style={{ width: '70px', padding: '2px 0', marginTop: '0px', background: 'red' }} />
                    </div>
                    <div>
                        <Nav className='text-capitalize'>
                            <Nav.Item onClick={() => setCategory('all')}>
                                <Nav.Link className='text-black fs-5'>All</Nav.Link>
                                {
                                    category === 'all' && <div className='ms-3'>
                                        <hr style={{ width: '25px', padding: '1.6px 0', marginTop: '-5px', background: 'red', }} />
                                    </div>
                                }
                            </Nav.Item>
                            {
                                categories?.map(cate => <Nav.Item onClick={() => setCategory(cate)}>
                                    <Nav.Link className='text-black fs-5'>{cate}</Nav.Link>
                                    {
                                        category === cate && <div className='ms-3'>
                                            <hr style={{ width: '40%', padding: '1.6px 0', marginTop: '-5px', background: 'red', }} />
                                        </div>
                                    }
                                </Nav.Item>)
                            }
                        </Nav>
                    </div>
                </div>
                <Row>
                    {
                        products?.slice(0, 8).map(product => <Product key={product?.id} product={product} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;