const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "apna college",
    content: "i love coding",
  },
  {
    username: "shraddha",
    content: "Hard work is the key to success",
  },
  {
    username: "Imran",
    content: "I am still berozgar",
  },
];

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render();
});
app.listen(port, () => {
  console.log("connection build successfully");
});
