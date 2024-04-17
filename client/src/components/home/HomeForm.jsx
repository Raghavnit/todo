import React, { useEffect, useState } from "react";
import { baseURL } from "../../../credentials";
import axios from "axios";

export default function HomeForm({userId,setTodos}){
    
    const [text,setText] = useState("");

    const handleSubmit = async(e)=>{
      
        e.preventDefault();
      try {
        const res = await axios.post(`${baseURL}/addTodos`,{user:userId,todo:text});
          setText("");
          setTodos(prev=>{return([...prev,res?.data])});
        } catch (error) {
          console.log(error);
        }
        
    }
    return <>
    <form onSubmit={handleSubmit}>
          <h2 className="label-wrapper">
            <label htmlFor="new-todo-input" className="label__lg">
              What needs to be done?
            </label>
          </h2>

          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            onChange={(e)=>{setText(e.target.value)}}
            value={text}
            required
          />
          <button className="btn btn__primary btn__lg">
            Add
          </button>
        </form>
    </>

}