const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`Port is listening ${port}`);
});

app.get("/", (req, res) => {
  console.log("This is home section");
});
app.get("/apple", (res, req) => {
  console.log("this is apple");
});
app.get("/mango", (res, req) => {
  console.log("this is mango section");
});

app.post("/banana", (res, req) => {
  console.log("this is banana section");
});
