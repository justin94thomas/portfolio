import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import { images, icons } from '../../Content/assets';


const Navigation = () => {
    const { JTLogo } = images;
    const { Message, Menu } = icons;
    const [showMenu, setShowMenu] = useState(false);
    return <>
        <div className='div-container navigation-main'>
            <nav className='navbar'>
                <img src={JTLogo} alt='Logo' className='logo' />
                <div className='menu-items'>
                    <Link activeClass='active' to='intro' spy smooth offset={-100} duration={500} className='link-item'>Introduction</Link>
                    <Link activeClass='active' to='about' spy smooth offset={-50} duration={500} className='link-item'>About</Link>
                    <Link activeClass='active' to='experience' spy smooth offset={-100} duration={500} className='link-item'>Experience</Link>
                    <Link activeClass='active' to='skills' spy smooth offset={-100} duration={500} className='link-item'>Skills</Link>
                </div>
                <button className='contact-btn'
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                    <Message size={20} style={{ marginRight: 10 }} /> Contact</button>

                <Menu size={20} className='logo-mob' onClick={() => setShowMenu(!showMenu)} />
                <div className='mobile-menu-items' style={{ display: showMenu ? 'flex' : 'none' }}>
                    <Link activeClass='active' to='intro' spy smooth offset={-100} duration={500} className='mobile-link-item' onClick={() => setShowMenu(false)}>Introduction</Link>
                    <Link activeClass='active' to='about' spy smooth offset={-50} duration={500} className='mobile-link-item' onClick={() => setShowMenu(false)}>About</Link>
                    <Link activeClass='active' to='experience' spy smooth offset={-75} duration={500} className='mobile-link-item' onClick={() => setShowMenu(false)}>Experience</Link>
                    <Link activeClass='active' to='skills' spy smooth offset={-100} duration={500} className='mobile-link-item' onClick={() => setShowMenu(false)}>Skills</Link>
                    <Link activeClass='active' to='contact' spy smooth offset={-100} duration={500} className='mobile-link-item' onClick={() => setShowMenu(false)}>Contact</Link>
                </div>

            </nav>
        </div >
    </>
}

export default Navigation;