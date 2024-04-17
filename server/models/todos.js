import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    todo:{
        type:String,
        require:true
    }
});
const Todo = mongoose.model("Todo",todoSchema);
export default Todo;