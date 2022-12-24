const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const email = req.body.email;
//   const user = { email };
  const token = jwt.sign(
    { email },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: "15m",
    }
  );
  req.token = token
  console.log("module.exports");
  next();
};
