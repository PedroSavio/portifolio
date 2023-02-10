import { Container, Row, Col } from "react-bootstrap"
import {Download} from 'react-bootstrap-icons'
import { useEffect, useState } from "react"

import './style.css';
import fotoFrente from '../../assets/img/foto-frente.png';

export const Fundo = () => {
    
    //Localização do index da palavra atual
    const [index, setIndex] = useState(1);
    
    // Palavra que vai ser digitada
    const areas = [ "Desenvolvedor Web", "Analista de Sistemas", "Desenvolvedor de Software"];
    
    //Localização do index da palavra atual
    const [loopNum, setLoopNum] = useState(0);

    // Estado que verifica se a palavra está sendo deletada ou digitada
    const [isDeleting, setIsDeleting] = useState(false);

    // Estado atual da palavra
    const [text, setText] = useState('');
    // Time para que a proxima letra seja digitada
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // Time para que a proxima palavra seja digitada
    const period = 2000;
    
    // A cada atualização do estado text, a função tick é chamada
    // SetInterval é uma função que executa uma função a cada x milisegundos definido pelo delta
    useEffect(() => {
        let temporizador = setInterval(() => {
            Magia();
      }, delta);
  
      return () => { clearInterval(temporizador) };
    }, [text])
    
    // Função que faz a magia acontecer
    const Magia = () => {
        // Pega o index da palavra atual no array
        let i = loopNum % areas.length;
        // Pega a palavra atual
        let fullText = areas[i];
        // Verifica se a palavra está sendo deletada ou digitada
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        // Atualiza o estado text
        setText(updatedText);

        // Se a palavra estiver sendo deletada
        if (isDeleting) {
          // Remove a ultima letra
          setDelta(prevDelta => prevDelta / 2);
        } 

        /*IsDelete == false e o estado text for igual a palavra completa (Seria quando o texto estiver terminado e começaria a deletar)
        Cai no primeiro loop e atualiza o delete pra true e ja começa a deletar*/

        /*IsDelete == true e o texto ja estiver vazio (Seria quando o texto estivesse terminado de deletar)
        Cai no segundo loop que troca o estado do delete pra falso e recomeça o loop*/

        /*IsDelete == false e o estado text for diferente da palavra completa (Seria quando o texto estivesse sendo digitado)
        Cai no ultimo loop que seta o index pra proxima palavra
        */
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }else{ 
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className='fundo' id='home'> 
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>

                        <span className="tagline">
                            Bem vindo ao meu Portfólio
                        </span>

                        <h1>{`Olá, meu nome é Savio `} 
                            <span className="txt-rotate">
                                <span className="wrap">{text}</span>
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
                            {`Baixar CV`}
                            <Download />
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