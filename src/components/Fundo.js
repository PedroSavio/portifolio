import { Container, Row, Col } from "react-bootstrap"
import {ArrowRight} from 'react-bootstrap-icons'
import { useEffect, useState } from "react"

import './Fundo.css';
import fotoFrente from '../assets/img/foto-frente.png';

export const Fundo = () => {
    return (
        <section className='fundo' id='home'> 
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}> 
                        <span className="tagline">
                            Bem vindo ao meu Portifolio
                        </span>

                        <h1 >
                            {`Olá Meu nome é Pedro Savio`}
                        </h1>

                        <h1>
                            <span className="wrap"> 
                                Sou Web Developer
                            </span>
                        </h1>
                        <p>
                            {`
                            Estudante de Engenharia da Computação
                            com experiência em desenvolvimento
                            web. Extremamente motivado, em
                            constante evolução tentando sempre
                            criar soluções úteis para problemas
                            complexos.`}
                        </p>
                        <button onClick={() => console.log('Conectei')}>
                            {`Entrar em contato`}
                            <ArrowRight size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={fotoFrente} alt="Minha imagem de braço cruzado" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Fundo