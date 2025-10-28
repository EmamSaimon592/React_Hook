import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [color, setColor] = useState('green');
 
  const changeColor = () => {
    setColor('Green')
  };

  return (
    <div>
      <h1>My favourite Color is {color}</h1>
      <button onClick={changeColor}>Blue</button>
    </div>
  );
};

export default App;
