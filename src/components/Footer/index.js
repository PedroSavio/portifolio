import { Container, Col, Row } from 'react-bootstrap';
import { TelephoneForwardFill } from 'react-bootstrap-icons'
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon4 from '../../assets/img/nav-icon4.svg';

import './style.css';


function Footer() {

    return(
        <footer className='footer'>
            <Container>
                <Row>
                    <Col xs={12} sm={4} xl={4}>
                        <div className='footer-text'>
                            <a href='#home'>
                                <span>Pedro Sávio</span>
                                <h2>Desenvolvedor FullStack</h2>
                            </a>
                        </div>
                    </Col>

                    <Col xs={12} sm={4} xl={4}>
                        <Col sm={12}>
                            <div className='footer-link'>
                                <Row>
                                    <Col xs={12} xl={5}>
                                    <a href="#skills">Habilidades</a>
                                    </Col >
                                    <Col xs={12} xl={5}>
                                    <a href="#projects">Experiências</a>
                                    </Col>
                                    <Col xs={12} xl={2}>
                                    <a href="#contato">Contato</a>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Col>

                    <Col xs={12} sm={4} xl={4}>
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

                    <Col sm={12} className='footer-cop-col'>
                        <p className='footer-cop'>© Pedro Sávio. All right reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;