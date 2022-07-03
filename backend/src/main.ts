import express from "express";
import { PrismaClient } from "@prisma/client";
import api from "./api";

const prisma = new PrismaClient();
const app = express();
api(app, prisma);
app.listen(3000, () => console.log("Listen on port 3000."));
