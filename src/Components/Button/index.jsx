import React from 'react';
import './button.css';

const CustomButton = ({ name, onClick }) => {
    return (
        <button className="custom-btn" onClick={onClick}>
            <svg width="180px" height="42px" viewBox="0 0 180 41" className="border">
                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span className='button-span'>{name}</span>
        </button>
    );
}

export default CustomButton;
