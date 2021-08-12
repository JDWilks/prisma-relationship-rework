const express = require("express");

const morgan = require("morgan");

const app = express();

// middleware

app.use(morgan("dev"));

app.use(express.json);

// routes

app.get("/", (req, res) => {
  res.json({ msg: "...get all request route working" });
});

// start the server

app.listen(3030, () => {
  console.log("server listening on port 3030");
});
