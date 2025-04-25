const Student = require("../models/Student");
const bcrypt = require('bcrypt');
const registerStudent=async(req,res)=>{
    try{
        const {enrollment,email,name,phone,branch,semester,password,role}=req.body;
        const existingstudent=await Student.findOne({enrollment});
        if(existingstudent)
        {
           return res.status(401).json({message:"Student already exists"});
        }
        const hashed_password=await bcrypt.hash(password,10);
        const newstudent=new Student({enrollment,email,name,phone,branch,semester,password:hashed_password,role});
        await newstudent.save();
        res.status(200).json({message:"Student saved successfully"});

    }catch(err)
    {
        res.status(500).json({message:err.message});
    }
}
module.exports={registerStudent};