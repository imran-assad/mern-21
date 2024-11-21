const express = require("express");
const app = express();

const port = 3002;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(port, () => {
  console.log(`app is listening ${port}`);
});

app.get("/register", (req, res) => {
  let { user } = req.query;
  res.send(`welcome ${user}`);
  console.log("welcome");
});

app.post("/register", (req, res) => {
  let { user } = req.body;
  res.send(`welcome ${user}`);
});
