const { book } = require("../../utils/dbClient");
const dbClient = require("../../utils/dbClient");

function createOneBook(req, res) {
  const newBook = req.body;
  dbClient.book
    .create({ data: newBook })
    .then((newBook) => {
      res.json({ newBook });
    })
    .catch((error) => {
      res.json({ msg: "...you fucked up didn't ya son" });
    });
}

function findAllBooks(req, res) {
  dbClient.book.findMany().then((allBooks) => res.json({ allBooks }));
}

function updateBook(req, res) {
  const updatedBook = req.body;
  const id = parseInt(req.params.id);
  dbClient.book
    .update({
      where: { id: id },
      data: updatedBook,
    })
    .then((updatedBook) => {
      res.json({ updatedBook });
    });
}

function deleteBook(req, res) {
  const id = parseInt(req.params.id);
  dbClient.book
    .delete({
      where: { id: id },
    })
    .then((user) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

// >>> following Sergio <<<

// async function getAllFiction(req, res) {
//   const fictionBooks = await book.findMany({
//     where: {
//       type: "fiction",
//     },
//   });
//   res.json({ fictionBooks });
// }

// below is getting all fiction and also by topic

async function getAllFiction(req, res) {
  const topic = req.query.topic;
  const fictionBooks = await book.findMany({
    where: {
      type: "fiction",
      topic: { equals: topic, mode: "insensitive" },
    },
  });
  const responseData = fictionBooks.length
    ? fictionBooks
    : "Theres no books with that topic";
  res.json({ responseData });
}

module.exports = {
  createOneBook,
  findAllBooks,
  updateBook,
  deleteBook,
  getAllFiction,
};
