/*
  Warnings:

  - Made the column `email` on table `Customer` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthDate" DATETIME,
    "city" TEXT,
    "street" TEXT,
    "postalCode" TEXT,
    "houseNumber" TEXT,
    "preferredFood" TEXT,
    "feedback" TEXT,
    "country" TEXT,
    "discountCode" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "emailVerificationCode" TEXT,
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Customer" ("birthDate", "city", "country", "createdAt", "discountCode", "email", "feedback", "firstName", "houseNumber", "id", "lastName", "phoneNumber", "postalCode", "preferredFood", "street", "updatedAt") SELECT "birthDate", "city", "country", "createdAt", "discountCode", "email", "feedback", "firstName", "houseNumber", "id", "lastName", "phoneNumber", "postalCode", "preferredFood", "street", "updatedAt" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
CREATE UNIQUE INDEX "Customer_phoneNumber_key" ON "Customer"("phoneNumber");
CREATE UNIQUE INDEX "Customer_discountCode_key" ON "Customer"("discountCode");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
