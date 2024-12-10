const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userModel = require("../schemas/user.schema");

dotenv.config({ path: "./sample.env" });

const generateToken = (data) => {
  const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET_KEY);
  return token;
};

module.exports = {
  generateToken,
};
