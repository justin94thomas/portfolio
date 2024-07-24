import React, { } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import { images, icons } from '../../Content/assets';


const Navigation = () => {

    const { JTLogo } = images;
    const { Message } = icons;
    return <>
        <div className='div-container navigation-main'>
            <nav className='navbar'>
                <img src={JTLogo} alt='Logo' className='logo' />
                <div className='menu-items'>
                    <Link activeClass='active' to='intro' spy smooth offset={-100} duration={500} className='link-item'>Introduction</Link>
                    <Link activeClass='active' to='about' spy smooth offset={0} duration={500} className='link-item'>About</Link>
                    <Link activeClass='active' to='experience' spy smooth offset={-100} duration={500} className='link-item'>Experience</Link>
                    <Link activeClass='active' to='skills' spy smooth offset={-100} duration={500} className='link-item'>Skills</Link>
                </div>
                <button className='contact-btn'
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                    <Message size={20} style={{ marginRight: 10 }} /> Contact</button>
            </nav>
        </div >
    </>
}

export default Navigation;