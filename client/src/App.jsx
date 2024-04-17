import axios from "axios";
import {React, Suspense, lazy, useEffect, useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { baseURL } from "../credentials";
const Home = lazy(()=>import("./components/home/Home"));
const Login = lazy(()=>import("./components/auth/Login"))
const Register = lazy(()=>import("./components/auth/Register"));


export default function App(){
  const [todos,setTodos] = useState([]);
  const [userId,setUserId] = useState("");
  const [count,setCount] = useState(0);
  useEffect(()=>{
    const getTodos = async ()=>{
      try {
        const res = await axios.get(`${baseURL}/getTodos?user=${userId}`);
        setTodos(res?.data);
      } catch (error) {
        console.log(error);
      }
    }
    !count? setCount(1):getTodos();
  },[userId]);
  return <>
  <BrowserRouter>
  <Routes>
  <Route exact path="/register" element = {<Suspense fallback = {<div>loading...</div>}><Register setUserId = {setUserId}/></Suspense>}/>
    <Route exact path="/login" element = {<Suspense fallback = {<div>loading...</div>}><Login setUserId = {setUserId}/></Suspense>}/>
    <Route exact path={"/"} element = {<Suspense fallback = {<div>loading...</div>}><Home userId = {userId} todos = {todos} setTodos={setTodos}/></Suspense>}/>
  </Routes>
  </BrowserRouter>
  </>

}