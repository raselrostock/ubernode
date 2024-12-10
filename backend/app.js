const express = require("express");
const cors = require("cors");

const userRouter = require("./services/routes/user.route");
const connectDB = require("./services/db/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
module.exports = app;
