import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

function SignUp() {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");
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
      
      <header className="App-header">
        <h1>SignUp page:</h1>
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

export default SignUp;
