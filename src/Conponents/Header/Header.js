import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


const Header = () => {

    return (
        <Navbar className='px-5 py-4' bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <div style={{ fontFamily: 'Caveat' }} className='fs-3 fw-bold text-black'>
                    Ashion
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto text-danger">
                    <Nav.Link className='text-uppercase fw-bold pe-3' href="#home">Home</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3' href="#link">Woman's</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3' href="#link">Man's</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3' href="#link">Shop</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3' href="#link">Prices</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3' href="#link">Blog</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3' href="#link">Contact</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className='text-uppercase fw-bold pe-3' href="#link">Login/Register</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3' href="#link"><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3' href="#link"><i class="fa-solid fa-heart"></i></Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3' href="#link"><i class="fa-solid fa-bag-shopping"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Header;