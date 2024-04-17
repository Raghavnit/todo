import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./styles.css"
import HomeForm from "./HomeForm";
import Task from "./Task";

// import Filters from "./Filters";
// import { useDispatch, useSelector } from "react-redux";
// import { add, edit, remove } from "../../controllers/todoSlice";
export default function Home({todos,setTodos,userId}){
  const navigate = useNavigate();
  useEffect(()=>{
    // const currUser = localStorage.getItem("userId")|| undefined;
    if(!userId){
      navigate("/login")
    }
  },[]);
  const [deleteId,setDeleteId]= useState(undefined);
  const tasks = todos?.map(todo=>{
    return(
      <Task key={todo?._id} todo={todo} setDeleteId = {setDeleteId}/>
    )
  })
  useEffect(()=>{
    const deleteTodo = (deleteId) => {
      const updatedTodos = todos.filter(todo => todo._id !== deleteId);
      setTodos(updatedTodos);
    };
    deleteId && deleteTodo(deleteId);
  },[deleteId]);
    return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <HomeForm userId={userId} setTodos = {setTodos}/>
        {/* <Filters/> */}
        {/* <h2 id="list-heading">{"n"} tasks remaining</h2> */}
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading">
            {tasks}
        </ul>
      </div>
    );
  }
  
  