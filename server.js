const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
// const nodemailer = require("nodemailer");
const fs = require("fs");
const mongoose = require("mongoose");
const User = require("./User");
require("dotenv").config();
const valuesTesting = require("./Modules/CheckTheValues");
const userToFind = require("./Modules/UserExist");
const port = process.env.PORT || 3033;
const jwt = require("jsonwebtoken");
app.use(express.json());
const path = require("path");
const emailsander = require("./emailVerificatin");
mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb://localhost/test",
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);

// const transporter = nodemailer.createTransport({
//   service: "hotmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });

app.post("/register", valuesTesting, async (req, res) => {
  // encrypt the password
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(req.body.password, salt);

  // preper the user object before saving in DB
  const user = await User.create({
    name: req.body.name,
    email: req.body.email.toLowerCase(),
    password: hash,
    isVerifaied: false,
  });

  // save the user object in DB
  user.save();

  //  create jwt token
  const email = req.body.email;
  const token = await jwt.sign({ email }, process.env.TOKEN, {
    expiresIn: "15m",
  });

  // call the email verification module for danding a verificaton email
  await emailsander.newfunction(req.body, token);

  // send a good response
  res.send({
    express: "your account will be active after email verification.",
    token: token,
  });
});

app.post("/emailverificationcode", async (req, res) => {
  console.log(req.body);
  //   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
  //     if (err) return res.sendStatus(403)
  //     console.log(user);})
  jwt.verify(req.body.code, process.env.TOKEN, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    console.log(user.email);
  });
  res.send("ok");
});
// app.post("/signup", async (req, res) => {
//   console.log(req.body);
//   const salt = await bcrypt.genSaltSync(10);
//   const hash = await bcrypt.hashSync(req.body.password, salt);
//   console.log(salt, hash, "see above");
//   fs.writeFile(path.join(__dirname, "/files/hashes.txt"), hash, (err) => {
//     if (err) {
//       console.error(err);
//     }
//   });
//   res.send("Hello World! " + salt + " " + hash);
// });

app.get("/data", (req, res) => {
  res.send({ data: "Hello World!" }); // 123
});

// console.log("path: -> ", fs.readFile( path.join( __dirname ,"/files/hashes.txt")));
app.post("/login", async (req, res) => {
  let currentHash = fs.readFileSync(path.join(__dirname, "/files/hashes.txt"), {
    encoding: "utf8",
    flag: "r",
  });
  // await fs.readFile( path.join( __dirname ,"/files/hashes.txt"),'utf8', (err, data) => {
  //   console.log("data : ",data);
  //    currentHash =  data
  // })
  console.log(req.body.password, currentHash);
  console.log(bcrypt.compareSync(req.body.password, currentHash));
  res.send("Hello World!");
});

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("generic", salt);
// console.log("---", hash);
// console.log(bcrypt.compareSync("generic",hash));

// so now you can hash your password and compare your password to the hash

// const myPlaintextPassword = "generic2";
// const hash2 = bcrypt.hashSync(myPlaintextPassword, 5);
// const result = bcrypt.compareSync(myPlaintextPassword+"d", hash2);
// console.log(result); // true

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
// bcrypt.hash("generic", 5, function (err, hash) {
//     console.log("1: ",hash);
//     // TODO: Store the hash in your password DB
//   });

// const myPlaintextPassword = "generic";
// const hash = bcrypt.hashSync(myPlaintextPassword, 5);
// console.log("2: ",hash);

// bcrypt.genSalt(10, function (err, salt) {
//     console.log("salt : : : : ",salt); // the random salt string
//     bcrypt.hash("generic", salt, function (err, hash) {
//         console.log("hash + salt: ",hash);
//         // TODO: Store the hash in your password DB
//       });

//   });

//   do it in only two lines:
