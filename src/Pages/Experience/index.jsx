import React, { useEffect, useState } from 'react';
import './experience.css';
import { PortfolioProvider, usePortfolioContext } from '../../Content/PortfolioContext';
import { parse, format } from 'date-fns';

const Experience = () => {
    const { state, dispatch } = usePortfolioContext();
    const [workData, setWorkData] = useState([]);


    useEffect(() => {
        const workData = state.data['Work Experience'];
        setWorkData(workData);
    }, [state.data]);

    function handleView(empID) {
        setWorkData(prevData =>
            prevData.map(item =>
                item.empID === empID
                    ? { ...item, active: true }
                    : { ...item, active: false }
            )
        );
    }

    return (
        <div className='div-container experience-main'>
            <section id='experience'>
                <div className='experience-content'>
                    <span className='intro-name'>Work Experience</span>
                    <div className='exp-side-content'>
                        <ul className='exp-ul'>
                            {workData.length > 0 && workData.map(item => {
                                return <li key={item?.empID} className={`exp-item ${item?.active ? 'active' : ''}`} onClick={() => handleView(item?.empID)}>
                                    {item['Company Name']}
                                </li>
                            })}
                        </ul>
                        {workData.length > 0 && workData.filter(item => item.active).map(item => {
                            const startDate = parse(item['Start Date'], 'MM-dd-yyyy', new Date());
                            const endDate = parse(item['End Date'], 'MM-dd-yyyy', new Date());
                            return (
                                <div key={item?.empID} className='company-info'>
                                    <p className='company-title'>React Developer</p>
                                    <p className='company-title'><span>{item['Company Name']}</span> | {item['Location']}</p>
                                    <p className='company-dates'>{format(startDate, 'MMM yyyy')} - {format(endDate, 'MMM yyyy')}</p>
                                    <ul className='exp-content'>
                                        {item['Roles and Responsibilities']?.length > 0 && item['Roles and Responsibilities'].map((role, index) => (
                                            <li key={index} className='company-item'>{role}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Experience;
