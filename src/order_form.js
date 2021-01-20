import React from 'react';

const Order_form = () => {


    return (
        <div>
            <div class='gallery'>
                <h1>Package images will appear here</h1>
            </div>
            <form class='selection-form'>
                <label>Select from the following packages: </label>    
                <select>
                    <option>Saltwater Slam</option>
                    <option>Be a little shellfish</option>
                    <option>Green Paradise</option>
                    <option>Chef's Catch</option>
                    <option>Nibblers</option>
                </select>
                <div>
                    <label>Date of Event:</label>
                    <input type='text'/>
                    <label>Time of Event:</label>
                    <input type='text'/>
                    <label>Location:</label>
                    <input type='text' />
                    <label>Additional Notes:</label>
                    <textarea/>
                </div>
            </form>
        </div>
    )
}

export default Order_form