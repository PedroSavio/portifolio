import { useEffect, useState } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Braces, ArrowDownShort, Server, HddNetwork, FiletypePy } from 'react-bootstrap-icons'
import fotoFrente from '../../assets/img/foto-frente.png'

import './style.css';

function Projects() {
    return (
        <section className="projects">
            <div className='header'>
                <h2 className=''>Projetos</h2>
                <span>Confira alguns dos meus projetos</span>
            </div>

            <Container>
                <div className='content'>
                    <Carousel>
                        <Carousel.Item>
                            <div className='content_carousel'>
                                <img src={fotoFrente}/>
                                <h2>Sistema de Feedback</h2>

                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={fotoFrente}/>
                              <h3>a</h3>
                            <Carousel.Caption>
                            <div>

                              <p>Desenvolvedor/Designer</p>
                            </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </Container>
        </section>
    )
}

export default Projects;