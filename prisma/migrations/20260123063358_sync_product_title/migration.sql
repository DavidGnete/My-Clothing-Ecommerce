/*
  Warnings:

  - You are about to drop the column `size` on the `Product` table. All the data in the column will be lost.
  - Added the required column `title` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "sizes" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');

-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "size",
ADD COLUMN     "Size" "sizes"[] DEFAULT ARRAY[]::"sizes"[],
ADD COLUMN     "title" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Size";
