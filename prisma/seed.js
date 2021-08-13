const { PrismaClient } = require("@prisma/client");

const dbClient = new PrismaClient();

function seed() {
  dbClient.user.create({
    name: jonathon,
    age: 22,
    Order: {
      create: {
        quantity: 5,
      },
    },
  });
}

module.exports = dbClient;
