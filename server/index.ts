import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   await prisma.user.create({
  //     data: {
  //       username: "neetinnagap",
  //       email: "nnagap72@gmail.com",
  //       password: "abc123",
  //       warehouses: {
  //         create: {
  //           name: "Taj Hotels",
  //         },
  //       },
  //     },
  //   });
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
