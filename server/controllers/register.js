import User from "../models/user.js";
import bcrypt from "bcrypt";

const register = async(req,res)=>{
    const {email,name,password} = req.body;
    try {
        const user = await User.findOne({email:email});
        if(user?.email){
            res.status(409).send("User already exists. Please Log in to continue");
        }else{
            const hash = await bcrypt.hash(password,12);
            const newUser = new User({
                email,name,password:hash
            });
            try {
                await newUser.save();
                res.status(200).send(newUser?._id);
            } catch (error) {
                res.status(500).send("Something went wrong");
            }
        }
    } catch (error) {
        res.status(500).send("Something went wrong 2");
    }
    
}
export default register