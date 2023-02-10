import { click } from '@testing-library/user-event/dist/click';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Braces, ArrowDownShort, Server, HddNetwork, FiletypePy } from 'react-bootstrap-icons'

import './style.css';


function Skills() {
    const initialStatePannel = 
    {
       "painel1": false,
       "painel2": false,
       "painel3": false,
       "painel4": false
    }

    const [statePannels, setStatePannels] = useState(initialStatePannel)
    const [selectedPannel, setSelectedPannel] = useState(null)

    useEffect(() => {
        const pannels = Object.keys(statePannels)
        const currentState = [pannels]
        
        pannels.map((p) => {
            p != selectedPannel ? currentState[selectedPannel] = !statePannels[selectedPannel] : currentState[selectedPannel] = false
        })
        setStatePannels(currentState)
    },[selectedPannel])
    


    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className='skill-box wow zoomIn'>
                            <h2>Habilidades</h2>
                            <span className='skill-span'>Tecnlogias por área</span>
                        </div>

                        <Container className='skills_container'>
                            <Col xl={12}>
                                <Row>
                                    {/* FRONT */}
                                    <Col xl={6} className={statePannels['painel1'] ? 'skills_content skills_open' : 'skills_content skills_close'}>
                                        <div className='skills_header'>
                                            <i className='skills_icon'>
                                                <Braces />
                                            </i>
                                            <div>
                                                <h1 className='skills_title'>Front-end developer</h1>
                                                <span className='skills_subtitle'> 1 ano </span>
                                            </div>
                                            <i className='skills_arrow'  onClick={() => setSelectedPannel('painel1')}>
                                                <ArrowDownShort />
                                            </i>
                                        </div>
                                        <div className='skills_list grid'>
                                            <div className='skills_data'>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>HTML5</h3>
                                                    <span className='skills_number'>100%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_html'></span>
                                                </div>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>Css</h3>
                                                    <span className='skills_number'>70%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_css'></span>
                                                </div>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>JavaScript</h3>
                                                    <span className='skills_number'>80%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_js'></span>
                                                </div>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>React</h3>
                                                    <span className='skills_number'>100%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_react'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Back */}
                                    <Col xl={6} className={statePannels['painel2'] ? 'skills_content skills_open' : 'skills_content skills_close'}>
                                        <div className='skills_header'>
                                            <i className='skills_icon'>
                                                <HddNetwork />
                                            </i>
                                            <div>
                                                <h1 className='skills_title'>Back-end developer</h1>
                                                <span className='skills_subtitle'> 2 ano+ </span>
                                            </div>
                                            <i className='skills_arrow' onClick={() => setSelectedPannel('painel2')}>
                                                <ArrowDownShort />
                                            </i>
                                        </div>
                                        <div className='skills_list grid'>
                                            <div className='skills_data'>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>Node JS</h3>
                                                    <span className='skills_number'>80%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_node'></span>
                                                </div>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>Laravel PHP</h3>
                                                    <span className='skills_number'>100%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_laravel'></span>
                                                </div>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>Django</h3>
                                                    <span className='skills_number'>60%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_django'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Scrapping/Machine Learning */}
                                    <Col xl={6} className={statePannels['painel3'] ? 'skills_content skills_open' : 'skills_content skills_close'}>
                                        <div className='skills_header'>
                                            <i className='skills_icon'>
                                                <FiletypePy />
                                            </i>
                                            <div>
                                                <h1 className='skills_title'>Python Scrapping</h1>
                                                <span className='skills_subtitle'> 3 anos+ </span>
                                            </div>
                                            <i className='skills_arrow' onClick={() => setSelectedPannel('painel3')}>
                                                <ArrowDownShort />
                                            </i>
                                        </div>
                                        <div className='skills_list grid'>
                                            <div className='skills_data'>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>Scrapy</h3>
                                                    <span className='skills_number'>100%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_scrapy'></span>
                                                </div>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>Selenium</h3>
                                                    <span className='skills_number'>100%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_selenium'></span>
                                                </div>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>Machine Learning</h3>
                                                    <span className='skills_number'>40%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_machinelearning'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>

                                    {/* Banco de dados */}
                                    <Col xl={6} className={statePannels['painel4'] ? 'skills_content skills_open' : 'skills_content skills_close'}>
                                        <div className='skills_header'>
                                            <i className='skills_icon'>
                                                <Server />
                                            </i>
                                            <div>
                                                <h1 className='skills_title'> Data Science</h1>
                                                <span className='skills_subtitle'> 1 ano+ </span>
                                            </div>
                                            <i className='skills_arrow' onClick={() => setSelectedPannel('painel4')}>
                                                <ArrowDownShort />
                                            </i>
                                        </div>
                                        <div className='skills_list grid'>
                                            <div className='skills_data'>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>MySQL</h3>
                                                    <span className='skills_number'>70%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_mysql'></span>
                                                </div>
                                                <div className='skills_titles'>
                                                    <h3 className='skills_name'>PostgreSQL</h3>
                                                    <span className='skills_number'>60%</span>
                                                </div>
                                                <div className='skills_bar'>
                                                    <span className='skills_percentage skills_postgres'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skills;