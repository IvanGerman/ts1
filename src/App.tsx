import React from 'react';
import logo from './logo.svg';
import './App.css';


let a:number | null = 10;
a = null;

let names: Array<string> = ['john', 'mary', 'bill'];
alert(names[0].toUpperCase());

let numbers: number[] = [1,2,3]; 


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
        </a>
      </header>
    </div>
  );
}

export default App;
