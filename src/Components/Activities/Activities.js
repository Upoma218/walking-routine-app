import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import RecordCart from '../RecordCart/RecordCart';
import "./Activities.css"

const Activities = () =>{
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('cart.json')
        .then(res => res.json())
        .then(data => setCarts(data))
    },[])
    const handleAddTime = (cart) =>{
        let time = 0;
        const getTime = cart.time;
        const newTime = time + getTime;
        const setTime = newTime;
        console.log(setTime);
        
    }
   
    return (
        <div>
            <div className='activities'>
            <div className='activities-container'>
                {
                    carts.map(cart => <Cart key ={cart.id} cart={cart} handleAddTime={handleAddTime} ></Cart>)
                    
                }
                
            </div>
            <RecordCart></RecordCart>
          </div>
        </div>
    );
};

export default Activities;

            
           