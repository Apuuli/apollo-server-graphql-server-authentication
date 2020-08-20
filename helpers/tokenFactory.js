const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config");

module.exports.tokenGenerator = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
  return token;
};
