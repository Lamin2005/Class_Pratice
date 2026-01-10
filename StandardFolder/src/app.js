import express from "express";
import cors from "cors";
import testRouter from "./routers/testRouter.js";
import cookieParser from "cookie-parser";
import authRouter from "./routers/authRouter.js";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credential: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/test", testRouter);
app.use("/api/v1", authRouter);

export default app;
