const express=require('express');
const jwt=require('jsonwebtoken');
const authmiddleware=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    if(!token)
    {
        return res.status(401).json({message:"No token access denied"});
    }
    try{
        
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.student=decoded;
       
        next();
    }catch(err)
    {
        res.status(401).json({message:"Invalid token"});
    }

};
module.exports=authmiddleware;