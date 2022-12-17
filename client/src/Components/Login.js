import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function Login() {
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

//   useEffect(() => {
//     console.log(nameRef.current?.value);
//   }, []);

  const click = () => {
    // console.log(352345235);
    fetch("/data")
      .then((res) => res.json())
      .then((res) => setData(res.data));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/backend", {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      })
      .then(
        (response) => {
          console.log(response.data.express);
        },
        (error) => {
          console.error(error);
        }
      );

    console.log("submited");
  };

  return (
    <div>
      {" "}
      <header className="App-header">
        <h1>login page:</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <span>name: </span>
              <input ref={nameRef} name="name" type={"text"} required />
            </label>
            <br />
            <label>
              <span>E-mail: </span>
              <input
                ref={emailRef}
                id="email"
                name="email"
                type={"email"}
                required
              />
            </label>
            <br />
            <label>
              <span>password: </span>
              <input
                ref={passwordRef}
                name="password"
                type={"password"}
                minLength="6"
                required
              />
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

export default Login;
