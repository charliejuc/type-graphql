import { PrismaClient, PostKind } from "./prisma/generated/client";

const prisma = new PrismaClient({
  log: ["query"],
});

async function main() {
  await prisma.connect();

  // const result = await prisma.user.count();
  const result = await prisma.user.aggregate({
    // @ts-ignore
    where: { age: { gt: 5 } },
    count: true,
    max: {
      age: true,
      // amount: true,
      // balance: true,
    },
    min: {
      age: true,
      // amount: true,
      // balance: true,
    },
    avg: {
      age: true,
      // amount: true,
      // balance: true,
    },
    sum: {
      age: true,
      // amount: true,
      // balance: true,
    },
  });
  console.log(result);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.disconnect();
  });
