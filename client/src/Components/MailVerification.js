import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MailVerification(props) {
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    props?.code &&
      axios
        .post("/emailverificationcode", { code: props.code })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            navigate("/");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  }, []);

  const sendCode = () => {
    axios
      .post("/emailverificationcode", { code: props.code })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(props);
  let params = new URLSearchParams();
  console.log(params.getAll("code"));
  return (
    <>
      <div>MailVerification, {props.code}</div>
      <button onClick={sendCode}>click to send the code</button>
    </>
  );
}

export default MailVerification;
