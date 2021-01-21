import React, { useState } from 'react';

const Order_form = () => {
    const [clientOrder, setClientOrder] = useState({
        name: '',
        email: '',
        eventDate: '',
        eventTime: '',
        eventLocation: '',
        package: '',
        additionalNotes: ''
    })

    return (
        <div>
            <form class='selection-form'>
                <label>Select from the following packages: </label>    
                <select name='package'>
                    <option value='Saltwater Slam'>Saltwater Slam</option>
                    <option value='Be a little shellfish'>Be a little shellfish</option>
                    <option value='Green Paradise'>Green Paradise</option>
                    <option value="Chef's Catch">Chef's Catch</option>
                    <option value='Nibblers'>Nibblers</option>
                </select>
                <div class='order_inputs'>
                    <label>Your Name:</label>
                    <input type='text' name='name'/>
                    <label>Email:</label>
                    <input type='email' name='email'></input>
                    <label>Date of Event:</label>
                    <input type='text' name='eventDate'/>
                    <label>Time of Event:</label>
                    <input type='text' name='eventTime'/>
                    <label>Location:</label>
                    <input type='text' name='eventLocation'/>
                    <label>Additional Notes:</label>
                    <textarea name='additionalNotes'/>
                </div>
                    <button type='submit'>Submit Order</button>
            </form>
        </div>
    )
}

export default Order_form