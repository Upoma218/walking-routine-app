import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import RecordCart from '../RecordCart/RecordCart';
import "./Activities.css"

const Activities = () =>{
    const [carts, setCarts] = useState([]);
    const [time, setTime] = useState(0);
    useEffect(() => {
        fetch('cart.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    const handleAddTime = (info) =>{
       setTime(time + info.time);
    }
   
    return (
        <div>
            <div className='activities'>
            <div className='activities-container'>
                {
                    carts.map(cart => <Cart key ={cart.id} cart={cart} handleAddTime={handleAddTime} ></Cart>)
                    
                }
                
            </div>
            <RecordCart time={time}></RecordCart>
          </div>
        </div>
    );
};

export default Activities;

            
           