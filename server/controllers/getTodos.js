import Todo from "../models/todos.js"

const getTodos = async(req,res)=>{
    const {user} = req.query
    try {
        const todos = await Todo.find({user:user});
        res.status(200).send(todos);
        
    } catch (error) {
       res.status(500).send("Something went wrong"); 
    }
}
export default getTodos;