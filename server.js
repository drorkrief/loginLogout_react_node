const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const port = 3033;

app.get("/", async (req, res) => {
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync("generic", salt);
  console.log(salt, hash, "see above");
  res.send("Hello World! "+ salt +" " + hash,);
});


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
