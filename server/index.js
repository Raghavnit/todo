import { config } from 'dotenv';
config();

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({
    origin:process.env.CLIENT,
    methods:["GET","POST"]
}));
app.get("/",(req,res)=>{
    res.send("Working!");
});
import registerRoute from "./routes/register.js"
app.use("/register",registerRoute);

import loginRoute from "./routes/login.js";
app.use("/login",loginRoute);

import addTodoRoute from "./routes/addTodo.js";
app.use("/addTodos",addTodoRoute);

import getTodosRoute from "./routes/getTodos.js";
app.use("/getTodos",getTodosRoute);

import editTodoRoute from "./routes/editTodo.js";
app.use("/editTodo",editTodoRoute);

import deleteTodoRoute from "./routes/deleteTodo.js";
app.use("/deleteTodo",deleteTodoRoute);

const mongoConnect = async()=>{
    try {
    await mongoose.connect(`${process.env.MONGOURL}retryWrites=true&w=majority&appName=Cluster0`);
    console.log("DB connected successfully!");
        
    } catch (error) {
        console.log("Error in connecting DB");
    }
}
mongoConnect();
app.listen(3000,()=>{console.log("app is listening at port 3000");});