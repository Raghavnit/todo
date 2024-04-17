import mongoose from "mongoose";
import Todo from "../models/todos.js";

const addTodo = async(req,res)=>{
    const {todo,user} = req.body;
    try {
        const newTodo = new Todo({
            user:user,
            todo:todo
        });
        await newTodo.save();
        res.status(200).send(newTodo);
    } catch (error) {
        res.status(500).send("unable to add todo");
    }
}
export default addTodo;