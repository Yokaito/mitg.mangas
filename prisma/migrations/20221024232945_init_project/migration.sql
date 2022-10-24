/*
  Warnings:

  - You are about to drop the column `author` on the `Series` table. All the data in the column will be lost.
  - You are about to drop the column `typeSeriesId` on the `Series` table. All the data in the column will be lost.
  - You are about to drop the `Genre` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `GenresOnSeries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TypeSeries` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `launched` to the `Series` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `GenresOnSeries` DROP FOREIGN KEY `GenresOnSeries_genreId_fkey`;

-- DropForeignKey
ALTER TABLE `GenresOnSeries` DROP FOREIGN KEY `GenresOnSeries_seriesId_fkey`;

-- DropForeignKey
ALTER TABLE `Series` DROP FOREIGN KEY `Series_typeSeriesId_fkey`;

-- AlterTable
ALTER TABLE `Series` DROP COLUMN `author`,
    DROP COLUMN `typeSeriesId`,
    ADD COLUMN `isVisible` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `launched` DATETIME(3) NOT NULL,
    ADD COLUMN `status` ENUM('ONGOING', 'COMPLETED') NOT NULL DEFAULT 'ONGOING',
    ADD COLUMN `views` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `Genre`;

-- DropTable
DROP TABLE `GenresOnSeries`;

-- DropTable
DROP TABLE `TypeSeries`;

-- CreateTable
CREATE TABLE `Artist` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Artist_createdAt_key`(`createdAt`),
    UNIQUE INDEX `Artist_updatedAt_key`(`updatedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Author` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Author_createdAt_key`(`createdAt`),
    UNIQUE INDEX `Author_updatedAt_key`(`updatedAt`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ArtistOnSeries` (
    `id` VARCHAR(191) NOT NULL,
    `artistId` VARCHAR(191) NOT NULL,
    `seriesId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `ArtistOnSeries_createdAt_key`(`createdAt`),
    UNIQUE INDEX `ArtistOnSeries_updatedAt_key`(`updatedAt`),
    INDEX `ArtistOnSeries_artistId_seriesId_idx`(`artistId`, `seriesId`),
    INDEX `ArtistOnSeries_seriesId_artistId_idx`(`seriesId`, `artistId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AuthorOnSeries` (
    `id` VARCHAR(191) NOT NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `seriesId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `AuthorOnSeries_createdAt_key`(`createdAt`),
    UNIQUE INDEX `AuthorOnSeries_updatedAt_key`(`updatedAt`),
    INDEX `AuthorOnSeries_authorId_seriesId_idx`(`authorId`, `seriesId`),
    INDEX `AuthorOnSeries_seriesId_authorId_idx`(`seriesId`, `authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
