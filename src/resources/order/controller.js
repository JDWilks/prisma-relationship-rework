const { order } = require("../../utils/dbClient");
const dbClient = require("../../utils/dbClient");

function createOneOrder(req, res) {
  const newOrder = req.body;
  dbClient.orders
    .create({ data: newOrder })
    .then((newOrder) => {
      res.json({ newOrder });
    })
    .catch((error) => {
      res.json({ msg: "...you fucked up didn't ya son" });
    });
}

function findAllOrders(req, res) {
  dbClient.orders.findMany().then((allOrders) => res.json({ allOrders }));
}

function updateOrder(req, res) {
  const updatedOrder = req.body;
  const id = parseInt(req.params.id);
  dbClient.orders
    .update({
      where: { id: id },
      data: updatedOrder,
    })
    .then((updatedOrder) => {
      res.json({ updatedOrder });
    });
}

function deleteOrder(req, res) {
  const id = parseInt(req.params.id);
  dbClient.orders
    .delete({
      where: { id: id },
    })
    .then((order) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

module.exports = {
  createOneOrder,
  findAllOrders,
  updateOrder,
  deleteOrder,
};
