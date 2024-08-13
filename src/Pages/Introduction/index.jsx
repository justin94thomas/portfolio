import React, { } from 'react';
import './intro.css';
import { images, icons } from '../../Content/assets';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { usePortfolioContext } from '../../Content/PortfolioContext';
import CustomButton from '../../Components/Button';
import { GIT_LINK, LINKEDIN_LINK } from '../../Content/constants';

const Introduction = () => {
    const { Profile } = images;
    const { GitHubICO, LinkedInICO } = icons;
    const { state } = usePortfolioContext();
    const [text] = useTypewriter({
        words: state?.data?.Designation || ['React Developer'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const downloadCoverLetter = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/cover.pdf`;
        link.download = 'Cover-Letter.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleOpenLink = (type) => {
        window.open(type === 'git' ? GIT_LINK : LINKEDIN_LINK, '_blank');
    }

    return <>
        <div className='div-container introduction-main'>
            <section id='intro'>
                <div className='intro-content'>
                    <span className='hello'>Hello,</span>
                    <span className='introText'>I'm <span className='intro-name'>Justin Thomas</span> <br />
                        a <span className='effect-text'>{text}</span>
                        <Cursor
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor="yellow"
                        /></span>
                    <p className='intro-para'>I'm a experienced React JS Developer  <br /> with a solid understanding of the MERN stack's components.</p>
                    <div className='button-set'>
                        <CustomButton name={'Download Resume'} onClick={downloadResume} className="custom-button" />
                        <CustomButton name={'Download Cover Letter'} onClick={downloadCoverLetter} className="custom-button" />
                    </div>
                    <div className='link-set'>
                        <GitHubICO size={25} className='link-ico' onClick={() => handleOpenLink('git')} />
                        <LinkedInICO size={25} className='link-ico' onClick={() => handleOpenLink('linkedIn')} />
                    </div>
                </div>
                <img src={Profile} alt="profile" className='backgroundImg' />
            </section>
        </div>
    </>
}

export default Introduction;