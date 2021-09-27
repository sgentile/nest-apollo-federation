import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.user.upsert({
    create: {
      name: 'Steve Gentile',
    },
    update: {
      name: 'Steve Gentile',
    },
    where: {
      id: 1,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
