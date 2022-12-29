import React, { useState, useRef } from "react";
import axios from "axios";

function Register() {
  const [data, setData] = useState();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/register", {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      })
      .then(
        (response) => {
          console.log(response.data.express);
          setData(response.data.express);
        },
        (error) => {
          console.error(error);
        }
      );

    console.log("submited");
    formRef.current.reset();
  };

  return (
    <div>
      {" "}
      <header className="App-header">
        <h1>Register page:</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
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
      </header>
      {data && <p>{data}</p>}
    </div>
  );
}

export default Register;
