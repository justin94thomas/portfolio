import React, { useState } from 'react';
import { images } from '../../Content/assets';
import './about.css';

const About = () => {
    const { BackgroundSide } = images;

    const [about] = useState([
        "Hello!",
        "I'm Justin Thomas, a passionate React JS Developer with over 5 years of professional experience in web development, including 4.6 years specializing in building user-centric, high-performance web applications.",
        "My technical toolkit includes React JS, JavaScript, TypeScript, HTML5, CSS3, Storybook, RedwoodJS, Zustand, and Context API, along with a solid grasp of backend technologies like Node.js, Express.js, and GraphQL.",
        "I thrive in collaborative, fast-paced environments and enjoy crafting intuitive, responsive interfaces that enhance user experience and drive results.",
        "I’m constantly learning and evolving as a developer—currently exploring technologies like Angular, React Native, and deepening my knowledge in RedwoodJS to stay ahead in the ever-changing tech landscape."
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
                        {about && about.map((item, idx) => {
                            return <div className='about-text' key={idx}>
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