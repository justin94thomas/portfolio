import React, { useState } from 'react';
import { images } from '../../Content/assets';
import './about.css';

const About = () => {
    const { BackgroundSide } = images;

    const [about] = useState([
        "Hello! ",
        "I'm Justin Thomas, a passionate React JS Developer with over four years of experience creating and optimizing user-centric web applications. My expertise lies in leveraging the MERN stack to build seamless, high-performance solutions that delight users and drive business growth.",
        "In my journey as a developer, I have consistently focused on enhancing user experiences through innovative front-end solutions. My technical skills include proficiency in React JS, JavaScript, HTML5, CSS3, and TypeScript, along with a solid understanding of Node.JS, Express.JS, and MongoDB for back-end development.",
        "I thrive in dynamic, collaborative environments and enjoy staying ahead of the curve by exploring the latest trends and technologies in web development.",
        "As a forward-thinking developer, I am always eager to contribute to open-source projects, share my knowledge with the community, and learn from fellow tech enthusiasts."
    ])
    return <>
        <div className='div-container about-main'>
            <section id='about'>
                <div className='about-content' style={{
                    backgroundImage: `url(${BackgroundSide})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: 'auto',
                    gap: '8vh',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <span className='intro-name'>About Me</span>
                    <div className='main-content'>
                        {about && about.map(item => {
                            return <div className='about-text'>
                                <p className='about-para'>{item}</p>
                            </div>
                        })}
                    </div>
                </div>

            </section>
        </div>
    </>
}

export default About;