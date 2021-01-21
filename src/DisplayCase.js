import React from 'react';
import toro_nigiri from './images/toro_nigiri.jpg';
import crazy_mexican from './images/crazy-mexican.jpg';
import veggie_roll from './images/veggie-roll.jpg';
import chef_hands from './images/sushi-chef-hands.jpg';
import sashimi from './images/sashimi-trio.jpg';
import OrderForm from './OrderForm';



const DisplayCase = () => {
    return (
        <div>
            <h2>Choose from our offerings below:</h2>
            <div className='gallery'>
                <caption>The Saltwater Slam</caption>
                <img src={toro_nigiri} alt='tuna belly sushi' height='200px' width='200px' />
                <caption>be a little shellfish</caption>
                <img src={crazy_mexican} alt='shrimp tempura roll' height='200px' width='200px'/>
                <caption>Green Paradise</caption>
                <img src={veggie_roll} alt='vegetable sushi roll' height='200px' width='200px'/>
                <caption>Chefs Catch</caption>
                <img src={chef_hands} alt='sushi chef hands on plate' height='200px' width='200px' />
                <caption>Little Bites</caption>
                <img src={sashimi} alt='various sushi pieces' height='200px' width='200px'/>
            </div>
        </div>
    )
}

export default DisplayCase