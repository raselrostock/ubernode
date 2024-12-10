const express = require("express");
const http = require("http");
const dotenv = require("dotenv");

const app = require("./app");

dotenv.config({ path: "./sample.env" });
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
