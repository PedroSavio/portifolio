import { Container, Col, Row } from 'react-bootstrap';
import { useState } from "react";
import logo from '../../assets/img/Logo.png';

import emailjs from '@emailjs/browser';

import './style.css';

function Contato() {

    const paramsEmail = {
        SERVICE_ID: 'service_2mh5bnn',
        TEMPLATE_ID: 'template_unseyjc',
        PUBLIC_KEY: 'tHtGPStRVfBmuKW7X'
    }

    const formContato = {
        nome: '',
        email: '',
        telefone: '',
        assunto:'',
        mensagem: ''
    }


    const [contato, setContato] = useState(formContato);
    const [botaoEnvio, setBotaoEnvio] = useState('Enviar');
    const [status, setStatus] = useState({} );

    const onFormUpdate = (category, value) => {
        setContato({
          ...contato,
          [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(paramsEmail.PUBLIC_KEY, paramsEmail.SERVICE_ID,  paramsEmail.TEMPLATE_ID )
        setBotaoEnvio("Enviando...");
        emailjs.send(paramsEmail.SERVICE_ID, paramsEmail.TEMPLATE_ID , {
            nome: contato.nome,
            email: contato.email,
            telefone: contato.telefone,
            assunto: contato.assunto,
            mensagem: contato.mensagem
        }, paramsEmail.PUBLIC_KEY)
        .then(
            (result) => {
                console.log("Enviado", result)
                setBotaoEnvio("Enviado!");
                setStatus({ succes: true, message: 'Message sent successfully'});
                setContato(formContato);}, 
            (error) => {
                console.log("Não enviado", error)
                setBotaoEnvio("Não foi possível enviar");
                setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
            });
    }
    return (
        <section className="contato" id='contato'> 
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <div className='imgRotate'>
                            <img src={logo} alt="Contate-me"/>
                        </div>
                    </Col>  
                    
                    <Col size={12} md={6}>
                        <div>
                            <h2>Contate-me</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col size={12} md={6} className="px-1">
                                        <input type="text" name="nome" placeholder="Seu nome" value={contato.nome} onChange={(e) => onFormUpdate('nome', e.target.value)} />
                                    </Col>
                                    <Col size={12} md={6} className="px-1">
                                        <input type="tel" name="telefone" placeholder="Telefone" value={contato.telefone} onChange={(e) => onFormUpdate('telefone', e.target.value)} />
                                    </Col>
                                    <Col size={12} md={6} className="px-1">
                                        <input type="text" name="assunto" placeholder="Assunto" value={contato.assunto} onChange={(e) => onFormUpdate('assunto', e.target.value)} />
                                    </Col>
                                    <Col size={12} md={6} className="px-1">
                                        <input type="email" name="email" placeholder="E-mail" value={contato.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <textarea name="mensagem" placeholder="Mensagem" value={contato.mensagem} onChange={(e) => onFormUpdate('mensagem', e.target.value)} />
                                        <button type="submit" onClick={handleSubmit}><span>{botaoEnvio}</span></button>
                                    </Col>
                                    {
                                        status.mensagem && 
                                        <Col>
                                            <p className={status.sucess === false ? "danger" : "sucess"}>{status.mensagem}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        );
    }

export default Contato;