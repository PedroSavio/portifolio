import { useEffect, useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './style.css';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon4 from '../../assets/img/nav-icon4.svg';
import logo from '../../assets/img/Logo.png'
import { TelephoneForwardFill } from 'react-bootstrap-icons'
import {
    BrowserRouter as Router
} from "react-router-dom";

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt='Logo'/>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='navbar-link' href="#home">Inicio</Nav.Link>
                            <Nav.Link className='navbar-link' href="#skills">Habilidades</Nav.Link>
                            <Nav.Link className='navbar-link' href="#projects">Experiências</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a href='https://linkedin.com/in/pedro-sávio-souza' target="_blank">
                                    <img src={navIcon1} alt='' />
                                </a>
                                <a href='https://github.com/PedroSavio' target="_blank">
                                    <img src={navIcon4} alt='' />
                                </a>
                                <a href='tel:+5579999026900' target="_blank">
                                    <TelephoneForwardFill color='White' size={15} />
                                </a>
                            </div>
                            <HashLink to='#contato'>
                                <button className='vvd'>
                                    <span> Entrar em contato! </span>
                                </button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}

export default NavBar;