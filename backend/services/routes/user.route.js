const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to the User Module",
  });
});

module.exports = router;
