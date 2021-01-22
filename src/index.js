import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FullOrder from './FullOrder';
import OrderForm from './OrderForm';
import DisplayCase from './DisplayCase';
import index from './index.scss'

function App() {
  return (
    <div className='app'>
        <div className='header'>
            <h1>Sushi Star</h1>
            <h2>Your personal sushi caterer...</h2>
        </div>
        <div className='options'>
            <p>The full sushi bar experience, brought to you!</p>
            <DisplayCase />
        </div>
        <OrderForm />
        
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))
