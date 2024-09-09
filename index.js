const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.listen(3001, () => {
  console.log("Listening on port 3000");
});

app.get("/register", (req, res) => {
  let { user, password } = req.query;
  res.send(`Welcome to the login page ${user}`);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Standard post response");
});
