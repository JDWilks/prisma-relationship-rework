const express = require("express");
const productsRouter = express.Router();

const { createOneProduct, findAllProducts } = require("./controller");

productsRouter.post("/", createOneProduct);

productsRouter.get("/", findAllProducts);

module.exports = productsRouter;
