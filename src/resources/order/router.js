const ordersRouter = require("express").Router();

const {
  createOneOrder,
  findAllOrders,
  updateOrder,
  deleteOrder,
} = require("./controller");

ordersRouter.post("/", createOneOrder);

ordersRouter.get("/", findAllOrders);

ordersRouter.patch("/:id", updateOrder);

ordersRouter.delete("/:id", deleteOrder);

module.exports = ordersRouter;
