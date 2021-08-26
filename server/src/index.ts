import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;

  const result = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });

  res.json(result);
});

app.get("/api/users", async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get("/api/users/:userId/warehouses/", async (req, res) => {
  const { userId } = req.params;
  const warehouses = await prisma.warehouse.findMany({
    where: {
      userId: {
        equals: +userId,
      },
    },
  });
  res.json(warehouses);
});

app.post("/api/users/:userId/warehouses/", async (req, res) => {
  const { name } = req.body;
  const { userId } = req.params;
  const warehouse = await prisma.warehouse.create({
    data: {
      name,
      userId: +userId,
    },
  });
  res.json(warehouse);
});

app.get("/api/users/:userId/warehouses/:warehouseId", async (req, res) => {
  const { userId, warehouseId } = req.params;
  const warehouse = await prisma.warehouse.findFirst({
    where: {
      id: +warehouseId,
      userId: +userId,
    },
    include: {
      products: true,
    },
  });
  if (!warehouse) {
    res.status(404).json({ message: "Warehouse not found" });
  } else {
    res.json(warehouse);
  }
});

app.post("/api/warehouses/:warehouseId/products", async (req, res) => {
  const { name, quantity } = req.body;
  const { warehouseId } = req.params;
  const product = await prisma.product.create({
    data: {
      name,
      initialQuantity: quantity,
      currentQuantity: quantity,
      warehouseId: +warehouseId,
    },
  });
  res.json(product);
});

const server = app.listen(8080, () =>
  console.log(`🚀 Server ready at: http://localhost:8080`)
);
