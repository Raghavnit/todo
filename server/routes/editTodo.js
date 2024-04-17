import epxress from "express";
import editTodo from "../controllers/editTodo.js";
const router = epxress.Router();
router.post("/",editTodo);
export default router;