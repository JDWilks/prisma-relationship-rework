-- CreateTable
CREATE TABLE "Order" (
    "orderid" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    PRIMARY KEY ("orderid")
);

-- AddForeignKey
ALTER TABLE "Order" ADD FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
