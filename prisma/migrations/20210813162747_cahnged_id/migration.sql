/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orderid` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductsOnOrder" DROP CONSTRAINT "ProductsOnOrder_orderid_fkey";

-- AlterTable
ALTER TABLE "Order" DROP CONSTRAINT "Order_pkey",
DROP COLUMN "orderid",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "ProductsOnOrder" ADD FOREIGN KEY ("orderid") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
