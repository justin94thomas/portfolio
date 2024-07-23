import React from 'react';
import './experience.css';

const Experience = () => {

    return <>
        <div className='div-container experience-main'>
            <section id='experience'>
                <div className='experience-content'>
                    <span className='intro-name'>Work Experience</span>
                    <div className='exp-side-content'>
                        <ul className='exp-ul'>
                            <li className='exp-item'>Ken42 EdTech</li>
                            <li className='exp-item'>Gigaflow Technologies LLP</li>
                            <li className='exp-item'>Web Design Magics</li>
                            <li className='exp-item'>Adaan Digital Solutions</li>
                        </ul>
                        <div className='company-info'>
                            <p className='company-title'>React Developer</p>
                            <p className='company-title'><span>Ken42 EdTech</span> | Bangalore, Karnataka</p>
                            <p className='company-dates'>Jan 2022 - Mar 2024</p>
                            <ul className='exp-content'>
                                <li className='company-item'>Led front-end development for the academic management module, facilitating term planning and faculty onboarding.</li>
                                <li className='company-item'>Developed robust APIs with Express.JS and integrated SOQL queries, enhancing data retrieval efficiency.</li>
                                <li className='company-item'>Trained and onboarded new front-end developers, improving team productivity.</li>
                                <li className='company-item'>Created the beta and initial release of the fee management module, increasing transaction reliability.</li>
                                <li className='company-item'>Enhanced Lighthouse performance score from 40 to 85+ by optimizing code and API calls and reducing load time.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
}

export default Experience;