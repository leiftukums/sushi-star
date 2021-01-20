import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Full_order from './full_order';
import Order_form from './order_form';
import DisplayCase from './display_case';

function App() {
  return (
    <div>
      <h1>Sushi Star</h1>
      <h2>Your personal sushi caterer...</h2>
      <p>The full sushi bar experience, brought to you, wherever you are</p>
      <DisplayCase />
      <Order_form />
      <Full_order />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))
