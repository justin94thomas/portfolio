import React, { } from 'react';
import { images } from '../../Content/assets';
import './about.css';

const About = () => {
    const { ReactLogo, JavaScriptLogo, NodeLogo, HTML5Logo, CSS3Logo, TypeScriptLogo } = images;
    return <>
        <div className='div-container about-main'>
            <section id='about'>
                <div className='about-content'>
                    <span className='intro-name'>About Me</span>
                    <div className='main-content'>
                        <div className='about-text'>
                            <p className='about-para'>I have over 4.2+ years of specializing in developing and optimizing user-centric web applications. <br /> Proficient in React JS, JavaScript, HTML5, CSS3, and TypeScript.</p>
                        </div>
                        <div className='logo-content'>
                            <img src={ReactLogo} alt='react-logo' className='techBackground' />
                            <img src={JavaScriptLogo} alt='javascript-logo' className='techBackground' />
                            <img src={TypeScriptLogo} alt='typescript-logo' className='techBackground' />
                            <img src={NodeLogo} alt='node-logo' className='techBackground' />
                            <img src={HTML5Logo} alt='html-logo' className='techBackground' />
                            <img src={CSS3Logo} alt='css-logo' className='techBackground' />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </>
}

export default About;