import { Container, Carousel, Col } from 'react-bootstrap';
import { Link45deg } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';
import fotoFeedback from '../../assets/img/FotoFeedback.png'
import fotoLogin from '../../assets/img/FotoLogin.png'
import fotoNeurometa from '../../assets/img/neurometaLogo.jpg'

import {
    BrowserRouter as Router
} from "react-router-dom";
import './style.css';

function Projects() {
    return (
        <section className="projects" id='projects'>
            <div className='header'>
                <h2 className=''>Experiências</h2>
                <span>Confira alguns dos meus projetos trabalhados</span>
            </div>
            <Router>
                <Container>
                    <div className='content'>
                        <Carousel>
                            <Carousel.Item>
                                <div className='content_carousel'>
                                    <Col>
                                        <Col xs={12} className="foto-carousel">
                                            <div>
                                                <img src={fotoFeedback} alt='imagem1' />
                                            </div>
                                        </Col>
                                        <Col xs={12} className="pt-xs-3">
                                            <div className='corousel_text'>
                                                <h2>Sistema de Feedback</h2>
                                                <p>Projeto criado para auxiliar empresas a coletar feedbacks de seus clientes, facilitando assim o processo de logistica reversa.
                                                    Desenvolvido em ReactJS, NodeJS, SQL lite com testes unitários em JEST.
                                                </p>
                                                <HashLink to='https://github.com/PedroSavio/APISistemaDeFeedbacks'>
                                                    <button>
                                                        <span>Ver mais</span>
                                                        <Link45deg size={25} />
                                                    </button>
                                                </HashLink>
                                            </div>
                                        </Col>
                                    </Col>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className='content_carousel'>
                                    <Col>
                                        <Col xs={12}>
                                            <div className="foto-carousel">
                                                <img src={fotoLogin} alt='imagem2' />
                                            </div>
                                        </Col>
                                        <Col xs={12} className="pt-xs-3">
                                            <div className='corousel_text'>
                                                <h2>Tela de login responsiva</h2>
                                                <p>Projeto criado para sistemas que precisam de uma estrutura basica de login com design sofisticado.
                                                    Desenvolvido em ReactJS, NodeJS, MySQL.
                                                </p>
                                                <HashLink to='https://github.com/PedroSavio/DesafioFrexco'>
                                                    <button>
                                                        <span>Ver mais</span>
                                                        <Link45deg size={25} />
                                                    </button>
                                                </HashLink>
                                            </div>
                                        </Col>
                                    </Col>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className='content_carousel'>
                                    <Col>
                                        <Col xs={12}>
                                            <div className="foto-carousel">
                                                <img src={fotoNeurometa} alt='imagem3' />
                                            </div>
                                        </Col>
                                        <Col xs={12} className="pt-xs-3 pr-xs-1">
                                            <div className='corousel_text'>
                                                <h2>Desenvolvedor Back-end</h2>
                                                <p>Startup com projeto social de saúde mental, em que utilizei as tecnologias Node.js/Express, TypeScript e MySQL.
                                                </p>
                                                <HashLink to='https:/linkedin.com/in/pedro-sávio-souza'>
                                                    <button>
                                                        <span>Ver mais</span>
                                                        <Link45deg size={25} />
                                                    </button>
                                                </HashLink>
                                            </div>
                                        </Col>
                                    </Col>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Container>
            </Router>
        </section>
    )
}

export default Projects;