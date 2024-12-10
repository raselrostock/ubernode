const express = require("express");
const {
  signupController,
  loginController,
} = require("../controllers/user.controller");
const { body } = require("express-validator");
const router = express.Router();

router
  .post(
    "/signup",
    [
      body("fullname.firstname")
        .isLength({ min: 3 })
        .withMessage("First name must be at least 3 characters"),
      body("fullname.lastname")
        .isLength({ min: 3 })
        .withMessage("Last name must be at least 3 characters"),
      body("email")
        .isEmail()
        .isLength({ min: 6 })
        .withMessage("Email must be at least 6 characters"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
    ],
    signupController
  )
  .post(
    "/login",
    [
      body("email")
        .isEmail()
        .isLength({ min: 6 })
        .withMessage("Email must be at least 6 characters"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
    ],
    loginController
  );

module.exports = router;
