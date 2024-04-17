import express from "express";
import getTodos from "../controllers/getTodos.js";
const router = express.Router();
router.get("/",getTodos);
export default router;