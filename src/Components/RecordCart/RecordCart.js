import React, { Profiler } from 'react';
import "./RecordCart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import "./profile.jpg";
import logo from './profile.jpg';
import Toast from './Toast';

const RecordCart = () => {
    return (
        <div className='walking-record'>
               <div className='personal-info'>
               <img src={logo} alt="" />
                <div>
                <h3>Resma Islam Upoma</h3>
                <p><span><FontAwesomeIcon icon={faLocation}></FontAwesomeIcon></span> Dhaka,  Bangladesh</p>
                </div>
               </div>
            <div className='profile-info'>
                <div>
                    <h1>53 <small>kg</small></h1>
                    <h6>Weight</h6>
                </div>
                <div>
                    <h1>5.2</h1>
                    <h6>Height</h6>
                </div>
                <div>
                    <h1>28 <small>yrs</small></h1>
                    <h6>Age</h6>
                </div>
            </div>
            <h3>Add a break</h3>
            <div className='profile-info'>
                <button><p>10s</p></button>
                <button><p>20s</p></button>
                <button><p>30s</p></button>
                <button><p>40s</p></button>
                <button><p>50s</p></button>
            </div>
            <h3>Walking Time Details</h3>
            <div className='profile-info'>
                <h3>Walking Time</h3>
                <p>{}</p>
            </div>
            <div className='profile-info'>
            <h3>Break Time</h3>
                <p>{}</p>
            </div>
            <div className="profile-info">
                <Toast></Toast>
            </div>
            
        </div>
    );
};

export default RecordCart;