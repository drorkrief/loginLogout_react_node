const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const fs = require("fs");
require('dotenv').config()

const port = process.env.PORT || 3033;
app.use(express.json());
const path = require("path");

app.post("/backend", (req, res) => {
  console.log(req.body);
  res.send({ express: "your EXPRESS backend connected to REACT" });
});

app.post("/signup", async (req, res) => {
  console.log(req.body);
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(req.body.password, salt);
  console.log(salt, hash, "see above");
  fs.writeFile(path.join(__dirname, "/files/hashes.txt"), hash, (err) => {
    if (err) {
      console.error(err);
    }
  });
  res.send("Hello World! " + salt + " " + hash);
});
app.get("/data", (req, res) => {
  res.send({ data: "Hello World!" });
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
  console.log(`Example app listening on port ${port}`);
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
