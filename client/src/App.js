import logo from './logo.svg';
import {useEffect,useState} from "react"
import './App.css';

function App() {
const [data, setData] = useState()
  useEffect(() => {
    fetch("/backend")
    .then(res=> res.json())
    .then(res => {
     console.log(res);
      setData(res.express)
    })
  }, [])
  
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
        <button>get data from node</button>
        <p>{!data ? "loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
