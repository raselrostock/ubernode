const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minLength: [3, "First name must be at least 3 characters"],
    },
    lastname: {
      type: String,
      minLength: [3, "Last name must be at least 3 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [6, "Email must be at least 6 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false,
    minLength: [6, "Password must be at least 6 characters"],
  },
  socketID: {
    type: String,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
