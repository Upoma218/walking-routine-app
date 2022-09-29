import React, { Profiler, useEffect, useState } from 'react';
import "./RecordCart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import "./profile.jpg";
import logo from './profile.jpg';
import toast, { Toaster } from 'react-hot-toast';

const RecordCart = ({time}) =>{
    const [value,setValue] = useState(0);
    useEffect(() => {
        const setTimeValue = localStorage.getItem("breakTime");
        setValue(setTimeValue);

    },[])
    const handleBreakTime = (e) => {
        const breakTimeValue = e.target.innerText;
        setValue(breakTimeValue);
        localStorage.setItem("breakTime", breakTimeValue)
    }
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
                <button onClick={(e) => handleBreakTime(e)}>10s</button>
                <button onClick={(e) => handleBreakTime(e)}>20s</button>
                <button onClick={(e) => handleBreakTime(e)}>30s</button>
                <button onClick={(e) => handleBreakTime(e)}>40s</button>
                <button onClick={(e) => handleBreakTime(e)}>50s</button>
            </div>
            <h3>Walking Time Details</h3>
            <div className='profile-info'>
                <h3>Walking Time</h3>
                <p>{time}seconds</p>
            </div>
            <div className='profile-info'>
            <h3>Break Time</h3>
                <p>{value}</p>
            </div>
            <div>
              <button className='toast-btn'
              onClick={() => {
              toast(
              <div>
              <h2>Congratulations!!</h2>
              <p>
                You have successfully completed the whole round.
              </p>
            </div>,
            {
              position: 'top-center',
              style: {
                background: 'rgb(221, 2, 122)',
                color: '#fff',
                border: '10px solid white',
                filter: 'drop-shadow(10px 10px 60px #000)'
              },
              duration: 3000,
            }
          );
        }}
      >
        Activity Completed
            </button>
    <Toaster />
           </div>
            
        </div>
    );
};

export default RecordCart;



 