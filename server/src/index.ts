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

const server = app.listen(8080, () =>
  console.log(`🚀 Server ready at: http://localhost:8080`)
);
