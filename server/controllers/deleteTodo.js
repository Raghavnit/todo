import Todo from "../models/todos.js";

const deleteTodo = async(req,res)=>{
    const {id} = req.body;
    try {
        await Todo.deleteOne({_id:id});
        res.status(200).send("deleted Successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}
export default deleteTodo;