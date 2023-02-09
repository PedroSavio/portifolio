import { useEffect, useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Braces} from 'react-bootstrap-icons'
import { ArrowDownShort } from 'react-bootstrap-icons/dist';
import './Skills.css';


function Skills() {
    return (
        <section className='skill' id='skills'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='skill-box wow zoomIn'>
                            <h2>Skills</h2>
                            <span>Habilidades por área</span>
                        </div>
                        <div className='skills_container container grid'>
                            <div>
                                <div className='skills_content'>
                                    <div className='skills_header'>
                                        <i>
                                            <Braces/>
                                        </i>
                                        <div>
                                            <h1 className='skills_title'>Front-end</h1>
                                            <span className='skills_subtitle'> Mais de 1 ano </span>
                                        </div>
                                        <i>
                                            <ArrowDownShort/>
                                        </i>
                                    </div>
                                    <div className='skills_list grid'>
                                        <div className='skills_data'>
                                            <div className='skills_title'>
                                                <h3 className='skills_name'>HTML</h3>
                                                <span className='skills_number'>90%</span>
                                            </div>
                                            <div className='skills_bar'>
                                                <span className='skills_percentage skills_html'></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;