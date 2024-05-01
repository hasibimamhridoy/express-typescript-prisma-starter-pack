import { PrismaClient } from "@prisma/client";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import { routeErrorHandle } from "./app/middleware/404RouteErrorHandle";
import MainRouter from "./routes/route";
const app: Application = express();
export const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use("/api/v1", MainRouter);

app.get("/", (req, res) => {
  res.send("Hello Working");
});

// 404 Route Handler
app.use(routeErrorHandle);

export default app;
