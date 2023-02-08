import { useEffect, useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import './NavBar.css';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

function NavBar() {
    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand href="#/" id='card' className='flip'>
                <span className='vvd-text'> Sávio Dev </span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'>
                                <img src={navIcon1} alt='' />
                            </a>
                            <a href='#'>
                                <img src={navIcon4} alt='' />
                            </a>
                            <a href='#'>
                                <img src={navIcon3} alt='' />
                            </a>
                        </div>
                        <button className='vvd'>
                            <span> BURACO NEGRO </span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;