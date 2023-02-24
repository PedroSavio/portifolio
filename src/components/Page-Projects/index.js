import { Container, Carousel } from 'react-bootstrap';
import { Link45deg } from 'react-bootstrap-icons';
import { HashLink } from 'react-router-hash-link';
import fotoFeedback from '../../assets/img/FotoFeedback.png'
import fotoLogin from '../../assets/img/FotoLogin.png'

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
                                <div>
                                    <img src={fotoFeedback} alt='imagem1'/>
                                </div>
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
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='content_carousel'>
                                <div>
                                    <img src={fotoLogin} alt='imagem2'/>
                                </div>
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