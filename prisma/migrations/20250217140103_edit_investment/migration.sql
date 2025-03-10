/*
  Warnings:

  - The primary key for the `Investment` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Investment" DROP CONSTRAINT "Investment_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Investment_pkey" PRIMARY KEY ("id");
