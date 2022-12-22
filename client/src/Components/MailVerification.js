import React from 'react'

function MailVerification(props) {
    console.log(props)
    let params = new URLSearchParams();
console.log(params.getAll('code'));
  return (
    <div>MailVerification, {props.code}</div>
  )
}

export default MailVerification