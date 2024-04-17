import { createSlice } from "@reduxjs/toolkit";
import insertTask from "./reducers/insertTask";
import editTask from "./reducers/editTask";
import deleteTask from "./reducers/deleteTask";

const initialState = {
    todo:[{id:1,title:"Eat",flag:false},
    {id:2,title:"Code",flag:false},
    {id:3,title:"Sleep",flag:false},
    {id:4,title:"Repeat",flag:false}
]
};
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
       add:insertTask,
       edit:editTask,
       remove:deleteTask
    }
})

export const {add,edit,remove} = todoSlice.actions;
export default todoSlice.reducer;
