import swaggerUi from "swagger-ui-express";
// eslint-disable-next-line import/no-extraneous-dependencies
import swaggerJSDoc from "swagger-jsdoc";

import express from "express";
import { PrismaClient } from "@prisma/client";
import api from "./api";

const prisma = new PrismaClient();
const app = express();

const options = {
  swaggerDefinition: {
    info: {
      title: "MAMANのAPI",
      version: "1.0.0",
    },
  },
  apis: ["./src/api.ts"],
};
app.use("/spec", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

api(app, prisma);
app.listen(3001, () => console.log("Listen on port 3000."));
