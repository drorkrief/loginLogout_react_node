const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
exports.newfunction = async function (reciver, hash) {
    const htmlContent = `Here is a reset token.<div>click here: <a href="http://localhost:3000/verification?code=${hash}">link</a><p>name: ${reciver.name}, email: ${reciver.email}</p></div>`
  const options = {
    from: process.env.EMAIL,
    to: reciver.email,
    subject: "Reset password",
    html: htmlContent,
  };

  transporter.sendMail(options, (error, info) => {
    if (error) console.log(error);
    else console.log(info);
  });
  // var transporter = nodemailer.createTransport("SMTP",{
  //   host: "smtp-mail.outlook.com", // hostname
  //   secureConnection: false, // TLS requires secureConnection to be false
  //   port: 587, // port for secure SMTP
  //   tls: {
  //     ciphers: "SSLv3",
  //   },
  //   auth: {
  //     // user: process.env.EMAIL,
  //     // pass: process.env.EMAIL_PASS,
  //    
  //   },
  // });
  // console.log("qwerty----------");
};
// module.exports = sendemail;
