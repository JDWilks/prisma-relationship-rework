const usersRouter = require("express").Router();

const { user } = require("../../utils/dbClient");
const dbClient = require("../../utils/dbClient");

const {
  createOneUser,
  findAllUsers,
  updateUser,
  deleteUser,
  userOrdersList,
} = require("./controller");

usersRouter.post("/", createOneUser);

usersRouter.get("/", findAllUsers);

usersRouter.patch("/:id", updateUser);

usersRouter.delete("/:id", deleteUser);

// >>> trying new shizzle rouotes >>>

usersRouter.get("/user-orders", userOrdersList);

module.exports = usersRouter;
