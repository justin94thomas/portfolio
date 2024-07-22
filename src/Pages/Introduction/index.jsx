import React, { } from 'react';
import './intro.css';
import { images } from '../../Content/assets';
const Introduction = () => {
    const { Profile } = images;

    return <>
        <div className='div-container introduction-main'>
            <section id='intro'>
                <div className='intro-content'>
                    <span className='hello'>Hello,</span>
                    <span className='introText'>I'm <span className='intro-name'>Justin Thomas</span> <br /> Web Developer</span>
                    <p className='intro-para'>I'm a experienced React JS Developer  <br /> with a solid understanding of the MERN stack's components.</p>
                </div>
                <img src={Profile} alt="profile" className='backgroundImg' />
            </section>
        </div>
    </>
}

export default Introduction;