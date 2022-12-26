const User = require("../User");

module.exports = async (userToFind) => {
  let isExist;
  User.findOne({ email: userToFind }, function (err, obj) {
    if(err) {
        console.log("err : ", err);
    }
    if (obj) {
      isExist = obj;
      console.log("obj : ", !obj);
    }
  });
  console.log("user To Find :", userToFind);
  console.log("isExist :", isExist);
  return true;
};
