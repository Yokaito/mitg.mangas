/*
  Warnings:

  - Added the required column `seriesTypeId` to the `Series` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Series` ADD COLUMN `seriesTypeId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `SeriesType` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `SeriesType_name_key`(`name`),
    UNIQUE INDEX `SeriesType_createdAt_key`(`createdAt`),
    UNIQUE INDEX `SeriesType_updatedAt_key`(`updatedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
