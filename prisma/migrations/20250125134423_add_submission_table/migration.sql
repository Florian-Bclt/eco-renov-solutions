/*
  Warnings:

  - You are about to drop the column `stepData` on the `Submission` table. All the data in the column will be lost.
  - Added the required column `travaux` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "stepData",
ADD COLUMN     "travaux" TEXT NOT NULL;
