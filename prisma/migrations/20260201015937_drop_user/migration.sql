-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT (gen_random_uuid())::text,
ALTER COLUMN "emailVerified" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "image" DROP NOT NULL;
