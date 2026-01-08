import express from "express";
import cors from "cors";
import testRouter from "./routers/testRouter.js";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credential : true
}));
app.use(express.json({limit : "16kb"}));
app.use(express.urlencoded({ extended : true, limit : "16kb"}));
app.use(express.static("public"));


app.use("/test",testRouter);


export default app;