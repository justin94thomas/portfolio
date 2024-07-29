import React, { } from 'react';
import './intro.css';
import { images } from '../../Content/assets';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { usePortfolioContext } from '../../Content/PortfolioContext';
import CustomButton from '../../Components/Button';

const Introduction = () => {
    const { Profile } = images;
    const { state } = usePortfolioContext();
    const [text] = useTypewriter({
        words: state?.data?.Designation || ['React Developer'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    const downloadResume = () => {
        console.log("download resume")
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const downloadCoverLetter = () => {
        console.log("download cover letter")
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/cover.pdf`;
        link.download = 'Cover-Letter.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                        <CustomButton name={'Download Resume'} onClick={downloadResume} />
                        <CustomButton name={'Download Cover Letter'} onClick={downloadCoverLetter} />
                    </div>
                </div>
                <img src={Profile} alt="profile" className='backgroundImg' />
            </section>
        </div>
    </>
}

export default Introduction;