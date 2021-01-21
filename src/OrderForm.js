import React, { useState } from 'react';

const OrderForm = () => {
    const [clientOrder, setClientOrder] = useState({
        name: '',
        email: '',
        eventDate: '',
        eventTime: '',
        eventLocation: '',
        package: '',
        additionalNotes: ''
    })

    const handleChange = (event) => {
        const value = event.target.value;
        setClientOrder({
            ...clientOrder,
            [event.target.name]: value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(clientOrder)
    }

    return (
        <div>
            <form className='selection-form' onSubmit={handleSubmit}>
                <label>Select from the following packages: </label>    
                <select name='package' value={clientOrder.package} onChange={handleChange}>
                    <option value='Saltwater Slam'>Saltwater Slam</option>
                    <option value='Be a little shellfish'>Be a little shellfish</option>
                    <option value='Green Paradise'>Green Paradise</option>
                    <option value="Chef's Catch">Chef's Catch</option>
                    <option value='Nibblers'>Nibblers</option>
                </select>
                <div className='order_inputs'>
                    <label>Your Name:</label>
                    <input type='text' name='name' value={clientOrder.name} onChange={handleChange}/>
                    <label>Email:</label>
                    <input type='email' name='email' value={clientOrder.email} onChange={handleChange}></input>
                    <label>Date of Event:</label>
                    <input type='text' name='eventDate' value={clientOrder.eventDate} onChange={handleChange}/>
                    <label>Time of Event:</label>
                    <input type='text' name='eventTime' value={clientOrder.eventTime} onChange={handleChange}/>
                    <label>Location:</label>
                    <input type='text' name='eventLocation' value={clientOrder.eventLocation} onChange={handleChange}/>
                    <label>Additional Notes:</label>
                    <textarea name='additionalNotes' value={clientOrder.additionalNotes} onChange={handleChange}/>
                </div>
                    <button type='submit'>Submit Order</button>
            </form>
            <div>
                <h2>Your details: </h2>
            <ul>
                <li>Name: {clientOrder.name}</li> 
                <li>Contact Email: {clientOrder.email}</li>    
                <li>Date of Service: {clientOrder.eventDate}</li>    
                <li>Event Start Time: {clientOrder.eventTime}</li>    
                <li>Location: {clientOrder.eventLocation}</li>
                <li>Package: {clientOrder.package}</li>
                <h4>Additional Info:</h4>
                <p>{clientOrder.additionalNotes}</p>    
            </ul>
                
            </div>
        </div>
    )
}

export default OrderForm