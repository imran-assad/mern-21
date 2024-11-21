const express = require("express");
const app = express();

const port = 3001;

app.listen(port, () => {
  console.log(`port is listening at ${port}`);
});

// app.use((req, res) => {
//   console.log("request received");
//   res.send("hello world");
// });

app.get("/", (req, res) => {
  res.send("you contacted root path");
});

app.get("/search", (req, res) => {
  let { q, age } = req.query;
  res.send(`You searched for ${q} ${age}`);
  console.log(req.query);
});

app.get("/apple", (req, res) => {
  res.send("you search for apple");
});

app.get("/orange", (req, res) => {
  res.send("you searched for orange");
});

app.get("/:username/:id", (req, res) => {
  console.log(req.params);
  let { username } = req.params;
  res.send(`This account belongs to ${username}`);
});

app.get("*", (req, res) => {
  res.send("the page you are looking for is not available");
});
