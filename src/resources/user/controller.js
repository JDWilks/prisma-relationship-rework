const { user } = require("../../utils/dbClient");
const dbClient = require("../../utils/dbClient");

function createOneUser(req, res) {
  const newUser = req.body;
  dbClient.users
    .create({ data: newUser })
    .then((newUser) => {
      res.json({ newUser });
    })
    .catch((error) => {
      res.json({ msg: "...you fucked up didn't ya son" });
    });
}

function findAllUsers(req, res) {
  dbClient.users.findMany().then((allUsers) => res.json({ allUsers }));
}

function updateUser(req, res) {
  const updatedUser = req.body;
  const id = parseInt(req.params.id);
  dbClient.users
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
  dbClient.users
    .delete({
      where: { id: id },
    })
    .then((user) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

module.exports = {
  createOneUser,
  findAllUsers,
  updateUser,
  deleteUser,
};
