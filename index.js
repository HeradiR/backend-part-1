const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

const port = 4000;

app.use(express.json());

app.listen(port, () => {
  console.log("Server is runnig on port", port)
});