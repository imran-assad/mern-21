const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("Listening on port 3000");
});

app.get("/register", (req, res) => {
  let { name, password } = req.query;
  res.send(`Welcome to the login page ${name}`);
});
