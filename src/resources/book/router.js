const booksRouter = require("express").Router();

const {
  createOneBook,
  findAllBooks,
  updateBook,
  deleteBook,
  getAllFiction,
} = require("./controller");

booksRouter.post("/", createOneBook);

booksRouter.get("/", findAllBooks);

booksRouter.patch("/:id", updateBook);

booksRouter.delete("/:id", deleteBook);

// >>>> following Sergio <<<<

booksRouter.get("/fiction", getAllFiction);

module.exports = booksRouter;
