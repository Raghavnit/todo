import axios from "axios";
import React, { useRef, useState } from "react";
import { baseURL } from "../../../credentials";

export default function Task({todo,setDeleteId}){
  const [task,setTask] = useState(todo?.todo||undefined);
  const [isReadOnly,setIsReadOnly] = useState(true);
  const handleSave  = async()=>{
    try {
      await axios.post(`${baseURL}/editTodo`,{id:todo?._id,newVal:task});
    } catch (error) {
      console.log(error);
    }
  }
  const handleDelete = async()=>{
    try {
      const res = await axios.post(`${baseURL}/deleteTodo`,{id:todo?._id});
      setDeleteId(todo?._id);
    } catch (error) {
      console.log(error);
    }
  }
  const inputRef = useRef();
    return <>
    <li className="todo stack-small">
            <div className="c-cb">
              {/* <input id="todo-0" type="checkbox" />
              <label className="todo-label" htmlFor="todo-0"> */}
                <input ref = {inputRef}style={{border:"none"}} type="text" name="task" value={task}  readOnly = {isReadOnly} onChange={e=>{setTask(e.target.value)}} />
              {/* </label> */}
            </div>
            <div className="btn-group">
              {isReadOnly?<button type="button" className="btn"onClick={()=>{setIsReadOnly(prev=>(!prev));inputRef?.current?.focus();}}>
                Edit
              </button>:
              <button type="button" className="btn"onClick={handleSave}>
              Save
            </button>
              }
              <button type="button" className="btn btn__danger"onClick={handleDelete}>
                Delete
              </button>
            </div>
          </li>
    </>
}