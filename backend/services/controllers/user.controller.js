const { validationResult } = require("express-validator");
const { createUser, findUser } = require("../queries/user.query");
const { getHashedPassword } = require("../utilities/encription.utility");

const signupController = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password } = req.body;
  const { firstname, lastname } = fullname;
  const isExistUser = await findUser(email);
  if (isExistUser) {
    return res.status(400).json({ message: "User already exists" });
  }
  try {
    const hashedPassword = await getHashedPassword(password);
    const user = await createUser({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signupController,
};
