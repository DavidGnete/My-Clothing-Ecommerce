/*
  Warnings:

  - The `Size` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Size",
ADD COLUMN     "Size" "Size"[] DEFAULT ARRAY[]::"Size"[];

-- DropEnum
DROP TYPE "sizes";
