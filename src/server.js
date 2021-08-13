const express = require("express");

const morgan = require("morgan");

const app = express();

const booksRouter = require("./resources/book/router");
const ordersRouter = require("./resources/order/router");
const usersRouter = require("./resources/user/router");

// middleware

app.use(morgan("dev"));

app.use(express.json());

// routes

app.use("/books", booksRouter);
app.use("/orders", ordersRouter);
app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.json({ msg: "...get all request route working" });
});

app.all("*", (req, res) => {
  res.json({ msg: "star getting this" });
});

// start the server

app.listen(3030, () => {
  console.log("server listening on port 3030");
});
