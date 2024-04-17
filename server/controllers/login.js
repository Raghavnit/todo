import User from "../models/user.js";
import bcrypt from "bcrypt";

const login = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email:email});
        if(!user?.email){
            res.status(404).send("User doesn't exists. Please signup to continue");
        }else{
            try {
                const result = bcrypt.compare(password,user?.password);
                if(result){
                    res.status(200).send(user?._id);
                }else{
                    res.status(401).send("Incorrect email or password");
                }
                
            } catch (error) {
                res.status(500).send("Something went wrong");
            }

        }
    } catch (error) {
        res.status(500).send("Somethig went wrong 2.0");
    }
}
export default login;