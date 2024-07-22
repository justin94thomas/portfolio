import React, { } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import { images } from '../../Content/assets';


const Navigation = () => {

    const { JTLogo } = images;
    return <>
        <div className='div-container navigation-main'>
            <nav className='navbar'>
                <img src={JTLogo} alt='Logo' className='logo' />
                <div className='menu-items'>
                    <Link className='link-item'>Introduction</Link>
                    <Link className='link-item'>About</Link>
                    <Link className='link-item'>Experience</Link>
                    <Link className='link-item'>Skills</Link>
                </div>
                <button className='contact-btn'>Contact</button>
            </nav>
        </div>
    </>
}

export default Navigation;