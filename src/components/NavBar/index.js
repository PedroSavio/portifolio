import { useEffect, useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

import './style.css';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import navIcon4 from '../../assets/img/nav-icon4.svg';
import logo from '../../assets/img/Logo.png'

function NavBar() {
    return (
        <Navbar expand="md">
            <Container>
                <Navbar.Brand href="#/">
                    <img src={logo} alt='Logo'/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='navbar-link' href="#home">Inicio</Nav.Link>
                        <Nav.Link className='navbar-link' href="#skills">Habilidades</Nav.Link>
                        <Nav.Link className='navbar-link' href="#projects">Projetos</Nav.Link>
                        <Nav.Link className='navbar-link' href="#services">Serviços</Nav.Link>
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
                            <span> Entrar em contato! </span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;