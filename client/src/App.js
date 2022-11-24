import { useState, useRef, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  // const getData = () => {
  //   console.log("sent");
  //  axios.post("/backend",{
  //   name:"dror",
  //   email:"ddd@dd.dd",
  //   password:"123"
  //  }).then(res => {
  //   console.log(res);
  //  })
  // };

  useEffect(() => {
    console.log(nameRef.current?.value);
  
  }, [])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/backend", {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    })
    .then(response => {
      console.log(response.data);
    }, (error) => {
      console.error(error);
    })
    
    
    console.log("submited");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>login page:</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <span>name: </span>
              <input ref={nameRef} name="name" type={"text"}></input>
            </label>
            <br />
            <label>
              <span>E-mail: </span>
              <input ref={emailRef} name="email" type={"email"}></input>
            </label>
            <br />
            <label>
              <span>password: </span>
              <input ref={passwordRef} name="password" type={"password"}></input>
            </label>
          </fieldset>
          <button type={"submit"}>Submit</button>
        </form>

        {/* <button onClick={getData}>get data from node</button>
        <p>{!data ? " " : data}</p> */}
      </header>
    </div>
  );
}

export default App;
