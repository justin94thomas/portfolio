import React, { useEffect, useState } from 'react';
import './skills.css';
import { usePortfolioContext } from '../../Content/PortfolioContext';
import { skills } from "../../Content/assets";

const Skills = () => {
    const { state } = usePortfolioContext();
    const [workData, setWorkData] = useState([]);

    useEffect(() => {
        setWorkData(state.data['Skills']);
    }, [state.data]);

    const handleView = (id) => {
        setWorkData(prevData =>
            prevData.map(item =>
                item.id === id
                    ? { ...item, active: true }
                    : { ...item, active: false }
            )
        );
    }

    return (
        <div className='div-container skills-main'>
            <section id='skills'>
                <div className='skills-content'>
                    <span className='intro-name'>Skills</span>
                    <div className='skills-side-content'>
                        <ul className='skills-ul'>
                            {workData.map(item => (
                                <button
                                    key={item?.id}
                                    className={`skills-item ${item?.active ? 'active' : ''}`}
                                    onClick={() => handleView(item?.id)}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </ul>
                        {workData.filter(item => item.active).map(item => {
                            return (
                                <div key={item?.id} className='skills-info'>
                                    <div className='skills2-content'>
                                        {item['items']?.map((role) => (
                                            <div className='skill-main'>
                                                <img src={skills[role.img]} alt={'dashboard-img'} style={{ width: '100px', height: '100%' }} />
                                                <p className='skills-label'>{role?.item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Skills;
