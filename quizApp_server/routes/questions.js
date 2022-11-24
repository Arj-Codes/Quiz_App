import express from "express";
import { create, deleteAll, getAll } from "../controllers/question.js";

const router = express.Router();

router.post("/", create);

router.delete("/", deleteAll);

router.get("/", getAll);

export default router;
