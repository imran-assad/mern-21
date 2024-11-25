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
    id: "1a",
    username: "apna college",
    content: "i love coding",
  },
  {
    id: "2a",
    username: "shraddha",
    content: "Hard work is the key to success",
  },
  {
    id: "3a",
    username: "Imran",
    content: "I am still learning",
  },
];

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/news", (req, res) => {
  res.render("news.ejs");
});
app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  posts.push({ username, content });
  console.log(req.body);
  res.redirect("/posts");
});
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => p.id === id);
  console.log(post);
  res.render("show.ejs", { post });
});
app.listen(port, () => {
  console.log("connection build successfully");
});
