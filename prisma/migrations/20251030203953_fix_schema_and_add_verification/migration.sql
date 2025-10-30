/*
  Warnings:

  - You are about to drop the column `birthDate` on the `FormDraft` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormDraft" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT,
    "lastName" TEXT,
    "phoneNumber" TEXT,
    "email" TEXT,
    "city" TEXT,
    "street" TEXT,
    "postalCode" TEXT,
    "houseNumber" TEXT,
    "country" TEXT,
    "preferredFood" TEXT,
    "feedback" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_FormDraft" ("city", "country", "createdAt", "email", "feedback", "firstName", "houseNumber", "id", "lastName", "phoneNumber", "postalCode", "preferredFood", "street", "updatedAt") SELECT "city", "country", "createdAt", "email", "feedback", "firstName", "houseNumber", "id", "lastName", "phoneNumber", "postalCode", "preferredFood", "street", "updatedAt" FROM "FormDraft";
DROP TABLE "FormDraft";
ALTER TABLE "new_FormDraft" RENAME TO "FormDraft";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
