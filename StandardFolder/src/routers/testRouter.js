import { getData } from "../controllers/testController.js";
import express from "express";

const router = express.Router();

router.get("/",getData);


export default router;

