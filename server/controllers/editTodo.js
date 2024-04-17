import Todo from "../models/todos.js";

const editTodo = async(req,res)=>{
    const {id,newVal} = req.body;
    try {
       const newTodo = await Todo.findOneAndUpdate({_id:id},{todo:newVal},{new:true});
       res.status(200).send(newTodo)
    } catch (error) {
        res.status(500).send("Unable to edit");
    }
}
export default editTodo