import React, { useState } from 'react';

const Full_order = () => {
    const [orderTotalItems, setOrderTotalItems] = useState([]);
    const [orderTotalPrice, setOrderTotalPrice] = useState('0.00')
    return (
        <div> 
            <h3>Your catering order:</h3>
            <p>Total cost: {orderTotalPrice}</p>
        </div>
    )
}

export default Full_order