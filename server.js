const bcrypt = require("bcrypt");
// bcrypt.hash("generic", 5, function (err, hash) {
//     console.log("1: ",hash);
//     // TODO: Store the hash in your password DB
//   });
  
// const myPlaintextPassword = "generic";
// const hash = bcrypt.hashSync(myPlaintextPassword, 5);
// console.log("2: ",hash);

bcrypt.genSalt(10, function (err, salt) {
    console.log("salt : : : : ",salt); // the random salt string
    bcrypt.hash("generic", salt, function (err, hash) {
        console.log("hash + salt: ",hash);
        // TODO: Store the hash in your password DB
      });

  });