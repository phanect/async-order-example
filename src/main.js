"use strict";

const express = require("express");
const { readFileSync } = require("fs");
const { join } = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const content = readFileSync(join(__dirname, "../public/index.html"));
  res
    .set("Content-Type", "text/html")
    .send(content);
});

app.get("/script.js", (req, res) => {
  setTimeout(() => {
    const content = readFileSync(join(__dirname, "../public/script.js"));
    res
      .set("Content-Type", "application/javascript")
      .send(content);
  }, 5000);
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
