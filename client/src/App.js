import React,{useState} from "react";
import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  const [login, setLogin] = useState()
  return (
    <div className="App">
      <div>
      <button onClick={()=>setLogin("Login")}>Login</button>
      <button onClick={()=>setLogin("signup")}>signup</button>
      <button onClick={()=>setLogin("")}>logout</button>
      </div>
      {!login?null:login === "Login" ? <Login/>:<SignUp/>}
     
    </div>
  );
}

export default App;
