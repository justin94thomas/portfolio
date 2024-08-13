import React, { useEffect, useState } from 'react';
import './projects.css';
import { usePortfolioContext } from '../../Content/PortfolioContext';
import { icons } from "../../Content/assets";
import { useSnackbar } from 'notistack';

const Projects = () => {
    const { state } = usePortfolioContext();
    const { GitHubICO, WebsiteICO } = icons;
    const { enqueueSnackbar } = useSnackbar();
    const [projectData, setProjectData] = useState([]);

    useEffect(() => {
        console.log("projectData", state.data['Projects'])
        setProjectData(state.data['Projects']);
    }, [state.data]);

    const handleOpenLink = (link) => {
        if (link) {
            window.open(link, '_blank');
        } else {
            enqueueSnackbar('I’m working on updates and will have the site back online soon. Thank you for your patience!', { variant: 'info', autoHideDuration: 3000, });
        }
    }

    return (
        <div className='div-container projects-main'>
            <section id='projects'>
                <div className='projects-content'>
                    <span className='intro-name'>Projects</span>
                    <div className='projects-content-div'>
                        {projectData && projectData.map(item => (
                            <div className='project-card'>
                                <div className='card-image'>
                                    <img src={item.Image} className={item.Website !== "" ? 'project-img' : "project-img disabled"} alt='project-img' />
                                </div>
                                <div className='card-details'>
                                    <p className='project-name'>{item['Project Name']}</p>
                                    <div className='card-links'>
                                        <GitHubICO size={25} className='link-ico' onClick={() => handleOpenLink(item.GitHub)} />
                                        <WebsiteICO size={25} className='link-ico' onClick={() => handleOpenLink(item.Website)} />
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
