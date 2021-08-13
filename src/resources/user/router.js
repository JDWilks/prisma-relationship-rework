const usersRouter = require("express").Router();

const {
  createOneUser,
  findAllUsers,
  updateUser,
  deleteUser,
} = require("./controller");

ordersRouter.post("/", createOneUser);

ordersRouter.get("/", findAllUsers);

ordersRouter.patch("/:id", updateUser);

ordersRouter.delete("/:id", deleteUser);

module.exports = usersRouter;
