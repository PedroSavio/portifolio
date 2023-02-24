import { Container, Col, Row } from 'react-bootstrap';
import { useState } from "react";
import fotoFeedback from '../../assets/img/FotoGrande.jpg'

import './style.css';

function Contato() {

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
        setBotaoEnvio("Enviando...");
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(contato),
        });
        setBotaoEnvio("Send");
        let result = await response.json();
        setContato(formContato);
        if (result.code == 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
    }
    return (
        <section className="contato" id='contato'> 
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <div className='imgRotate'>
                            <img src={fotoFeedback} alt="Contate-me"/>
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
                                        <button type="submit"><span>{botaoEnvio} </span></button>
                                    </Col>
                                    {
                                        status.mensagem && 
                                        <Col>
                                            <p className={status.sucess == false ? "danger" : "sucess"}>{status.mensagem}</p>
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