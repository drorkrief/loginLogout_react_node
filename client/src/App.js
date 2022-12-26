import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { Routes, Route, Link, useSearchParams  } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import ErrorPath from "./Components/ErrorPath";
import About from "./Components/About";
import MailVerification from "./Components/MailVerification";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [login, setLogin] = useState();
  let urlparams = searchParams.entries()
  console.log("searchParams.get(code)",urlparams);
  
  return (
    <div className="App">
      {" "}
      <nav className="nav">
        <ul className="topnav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signup">signup</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </nav>
      {/* <div>
        <button onClick={() => setLogin("Login")}>Login</button>
        <button onClick={() => setLogin("signup")}>signup</button>
        <button onClick={() => setLogin("")}>logout</button>
      </div> */}
      {/* {!login ? null : login === "Login" ? <Login /> : <SignUp />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="verification" element={<MailVerification test="123123123" code={searchParams.get("code")} />} />
        <Route path="*" element={<ErrorPath />} />

      </Routes>
      
    </div>
  );
}

export default App;
