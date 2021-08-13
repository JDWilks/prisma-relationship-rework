const { product } = require("../../utils/dbClient");
const dbClient = require("../../utils/dbClient");

function createOneProduct(req, res) {
  const newProduct = req.body;
  dbClient.product
    .create({ data: newProduct })
    .then((newProduct) => {
      res.json({ newProduct });
    })
    .catch((error) => {
      res.json({ msg: "...you fucked up didn't ya son" });
    });
}

function findAllProducts(req, res) {
  dbClient.product.findMany().then((allProducts) => res.json({ allProducts }));
}

module.exports = {
  createOneProduct,
  findAllProducts,
};
