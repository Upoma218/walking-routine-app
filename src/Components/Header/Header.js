import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWalking } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    
    return (
        <div className='header-text'>
            <div className='header'>
            <h3><span><FontAwesomeIcon className='header-icon' icon={faWalking} />

            </span>Weekly-Walking-Routine-App</h3>
        </div>
        <h2>Select Today's Walking</h2>
        </div>
    );
};

export default Header;