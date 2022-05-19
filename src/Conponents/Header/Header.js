
import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import AddToCard from '../AddToCard/AddToCard';


const Header = () => {

    const getId = JSON.parse(localStorage.getItem("id"));
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                const filterData = data.filter(p => getId.includes(p.id));
                setProducts(filterData);
            })
    }, [])

    return (
        <Navbar className='px-5 py-4' bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <div style={{ fontFamily: 'Cookie' }} className='fs-1 fw-bold text-black'>
                    Ashion
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto text-danger">
                    <Nav.Link className='text-uppercase fw-bold pe-3'>Home</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3'>Woman's</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3'>Man's</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3'>Shop</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3'>Prices</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3'>Blog</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3'>Contact</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className='fw-bold pe-3' href="#link">Login/Register</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3 fs-5'><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3 fs-5' ><i class="fa-solid fa-heart"></i></Nav.Link>
                    <AddToCard getId={getId} products={products} />
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Header;