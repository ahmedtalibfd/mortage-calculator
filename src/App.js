import logo from './logo.svg';
import './App.css';
import MortageCalculator from './mortage-calculator';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <h1>Mortage Calculator</h1>
      <MortageCalculator />
    </div>
  );
}

export default App;
