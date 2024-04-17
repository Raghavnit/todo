import express from "express";
import addTodo from "../controllers/addTodo.js";

const router = express.Router();

router.post("/",addTodo);
export default router;