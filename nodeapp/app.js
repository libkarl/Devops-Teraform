const express = require("express");
const app = express();
const t = "a";

app.get("/", (req, res) => {
  res.send("Service is up and running!");
});

app.listen(3000, () => {
  console.log("Service listening on port 3000!");
});
