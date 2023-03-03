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
                        <img className='footer-logo' src={logo}/>
                        <div className='footer-text'>
                            <h2>Desenvolvedor FullStack</h2>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <div className='footer-link'>
                            <a href="#home">Inicio</a>
                            <a href="#skills">Habilidades</a>
                            <a href="#projects">Experiências</a>
                        </div>
                    </Col>

                    <Col sm={4}>
                        <span className='social-text'>
                                <div className='footer-social'>
                                    <a href='https:/linkedin.com/in/pedro-sávio-souza' target="_blank">
                                        <img src={navIcon1} alt='' />
                                    </a>
                                    <a href='https://github.com/PedroSavio' target="_blank">
                                        <img src={navIcon4} alt='' />
                                    </a>
                                    <a href='tel:+5579999026900' target="_blank">
                                        <TelephoneForwardFill color='White' size={28}/>
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