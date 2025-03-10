/*
  Warnings:

  - You are about to drop the column `name` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `travaux` on the `Submission` table. All the data in the column will be lost.
  - Added the required column `anneeConstruction` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `besoinsTravaux` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codePostal` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energieChauffage` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logement` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `niveaux` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personnesFoyer` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `revenuFiscal` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `surface` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeChauffage` to the `Submission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ville` to the `Submission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "name",
DROP COLUMN "travaux",
ADD COLUMN     "anneeConstruction" TEXT NOT NULL,
ADD COLUMN     "besoinsTravaux" TEXT NOT NULL,
ADD COLUMN     "codePostal" TEXT NOT NULL,
ADD COLUMN     "energieChauffage" TEXT NOT NULL,
ADD COLUMN     "logement" TEXT NOT NULL,
ADD COLUMN     "niveaux" INTEGER NOT NULL,
ADD COLUMN     "personnesFoyer" INTEGER NOT NULL,
ADD COLUMN     "revenuFiscal" TEXT NOT NULL,
ADD COLUMN     "surface" INTEGER NOT NULL,
ADD COLUMN     "travauxRealises" TEXT,
ADD COLUMN     "typeChauffage" TEXT NOT NULL,
ADD COLUMN     "ville" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;
