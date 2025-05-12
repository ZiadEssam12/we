const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function setReplicaIdentity() {
  try {
    await prisma.$executeRaw`ALTER TABLE "Session" REPLICA IDENTITY FULL;`;
    await prisma.$executeRaw`ALTER TABLE "Account" REPLICA IDENTITY FULL;`;
    console.log("Replica identity set successfully");
  } catch (error) {
    console.error("Error setting replica identity:", error);
  } finally {
    await prisma.$disconnect();
  }
}

setReplicaIdentity();
