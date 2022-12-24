import axios from "axios";
import React, { useEffect } from "react";

function MailVerification(props) {
  useEffect(() => {
    props?.code && axios.post("/emailverificationcode", { code: props.code });
  }, []);

  const sendCode = () => {
    axios.post("/emailverificationcode", { code: props.code });
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
