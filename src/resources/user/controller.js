const { user } = require("../../utils/dbClient");
const dbClient = require("../../utils/dbClient");

function createOneUser(req, res) {
  const newUser = req.body;
  dbClient.user
    .create({ data: newUser })
    .then((newUser) => {
      res.json({ newUser });
    })
    .catch((error) => {
      res.json({ msg: "...you fucked up didn't ya son" });
    });
}

function findAllUsers(req, res) {
  dbClient.user.findMany().then((allUsers) => res.json({ allUsers }));
}

function updateUser(req, res) {
  const updatedUser = req.body;
  const id = parseInt(req.params.id);
  dbClient.user
    .update({
      where: { id: id },
      data: updatedUser,
    })
    .then((updatedUser) => {
      res.json({ updatedUser });
    });
}

function deleteUser(req, res) {
  const id = parseInt(req.params.id);
  dbClient.user
    .delete({
      where: { id: id },
    })
    .then((user) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

// >>> trying to get relationship working

async function userOrdersList(req, res) {
  const userOrders = await dbClient.user.findMany({
    include: { orders: true },
  });
  res.json({ data: userOrders });
}

module.exports = {
  createOneUser,
  findAllUsers,
  updateUser,
  deleteUser,
  userOrdersList,
};
