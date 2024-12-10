const userModel = require("../schemas/user.schema");

const createUser = async (data) => {
  const { firstname, lastname, email, password } = data;
  try {
    const user = await userModel.create({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const findUser = async (email) => {
  try {
    const user = await userModel.findOne({ email }).select("+password");
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createUser,
  findUser,
};
