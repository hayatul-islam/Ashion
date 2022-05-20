
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AddToCard from '../AddToCard/AddToCard';


const Header = () => {

    return (
        <Navbar className='px-5 py-4' bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <div style={{ fontFamily: 'Cookie' }} className='fs-1 fw-bold text-black'>
                    Ashion
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <NavLink to='/' className='text-uppercase fw-bold pe-3 text-dark text-decoration-none'>Home</NavLink>
                    <NavLink to='/shop' className='text-uppercase fw-bold pe-3 text-dark text-decoration-none'>Shop</NavLink>
                    <NavLink to='' className='text-uppercase fw-bold pe-3 text-dark text-decoration-none'>Woman's</NavLink>
                    <NavLink to='' className='text-uppercase fw-bold pe-3 text-dark text-decoration-none'>Man's</NavLink>
                    <NavLink to='' className='text-uppercase fw-bold pe-3 text-dark text-decoration-none'>Prices</NavLink>
                    <NavLink to='' className='text-uppercase fw-bold pe-3 text-dark text-decoration-none'>Blog</NavLink>
                    <NavLink to='' className='text-uppercase fw-bold pe-3 text-dark text-decoration-none'>Contact</NavLink>
                </Nav>
                <Nav>
                    <Nav.Link className='fw-bold pe-3' href="#link">Login/Register</Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3 fs-5'><i class="fa-solid fa-magnifying-glass"></i></Nav.Link>
                    <Nav.Link className='text-uppercase fw-bold pe-3 fs-5' ><i class="fa-solid fa-heart"></i></Nav.Link>
                    <AddToCard />
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Header;