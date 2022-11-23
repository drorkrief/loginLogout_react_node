import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';

function App() {
  const [message, setMessage] = useState()
  useEffect(() => {
    
  }, [])

  const click = () => {
    // console.log(352345235);
    fetch("/data").then(res => res.json()).then(res => setMessage(res.data))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button onClick={click}>click here</button>
      <p>{!message}</p>
      </header>
    </div>
  );
}

export default App;
