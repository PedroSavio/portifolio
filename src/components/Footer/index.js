import { Container, Col, Row } from 'react-bootstrap';
import { TelephoneForwardFill } from 'react-bootstrap-icons'
import logo from '../../assets/img/Logo.png'
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon4 from '../../assets/img/nav-icon4.svg';
import {
    BrowserRouter as Router
} from "react-router-dom";

import './style.css';


function Footer() {

    return(
        <footer className='footer'>
            <Container>
                <Row>
                    <Col sm={4}>
                        <img src={logo}/>
                        <div className='footer-text'>
                            <h2>Desenvolvedor FullStack</h2>
                        </div>
                    </Col>

                    <Col sm={4}>
                            <a className='footer-link' href="#home">Inicio</a>
                            <a className='footer-link' href="#skills">Habilidades</a>
                            <a className='footer-link' href="#projects">Experiências</a>
                    </Col>

                    <Col sm={4}>
                        <span className='navbar-text'>
                                <div className='social-icon'>
                                    <a href='https:/linkedin.com/in/pedro-sávio-souza' target="_blank">
                                        <img src={navIcon1} alt='' />
                                    </a>
                                    <a href='https://github.com/PedroSavio' target="_blank">
                                        <img src={navIcon4} alt='' />
                                    </a>
                                    <a href='tel:+5579999026900' target="_blank">
                                        <TelephoneForwardFill color='White' size={16} className= 'mt-1' />
                                    </a>
                                </div>
                        </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;