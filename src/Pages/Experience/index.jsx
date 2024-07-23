import React from 'react';
import './experience.css';

const Experience = () => {


    return <>
        <div className='div-container experience-main'>
            <section id='experience'>
                <div className='experience-content'>
                    <span className='intro-name'>Where have I worked</span>
                    <div className='main-content'>
                        <ul className='exp-ul'>
                            <li className='exp-item'>Ken42 EdTech</li>
                            <li className='exp-item'>Gigaflow Technologies LLP</li>
                            <li className='exp-item'>Web Design Magics</li>
                            <li className='exp-item'>Adaan Digital Solutions</li>
                        </ul>
                        <div>
                            <span>Engineer <span>Ken42 EdTech</span></span>
                            <span>Jan 2022</span>-<span>Mar 2024</span>
                            <ul className='exp-content'>
                                <li className='exp-item'>Led front-end development for the academic management module, facilitating term planning and faculty onboarding.</li>
                                <li className='exp-item'>Developed robust APIs with Express.JS and integrated SOQL queries, enhancing data retrieval efficiency.</li>
                                <li className='exp-item'>Trained and onboarded new front-end developers, improving team productivity.</li>
                                <li className='exp-item'>Created the beta and initial release of the fee management module, increasing transaction reliability.</li>
                                <li className='exp-item'>Enhanced Lighthouse performance score from 40 to 85+ by optimizing code and API calls and reducing load time.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default Experience;