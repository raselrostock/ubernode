const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./sample.env" });
const connectDB = async () => {
  try {
    const conn = await mongoose
      .connect(String(process.env.MONGO_URI))
      .then(() => console.log(`MongoDB Connected: ${process.env.MONGO_URI}`))
      .catch((error) => {
        throw new Error(error);
      });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
