import express from "express";
import deleteTodo from "../controllers/deleteTodo.js";
const router = express.Router();
router.post("/",deleteTodo);
export default router;