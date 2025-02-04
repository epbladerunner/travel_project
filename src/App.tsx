import React from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './components/travel';
import TravelCreditCardFeatures from './Components/TravelCreditCardFeatures';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a



          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

          <div className = "App">
    <Travel hotel='Las Vegas' flights='New York' carRentals='El Paso' />
  </div>
        </a>
      </header>
    </div>
  );

}

export default App;
