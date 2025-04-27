const Student = require("../models/Student");
const logout=async(req,res)=>{
    try{
         localStorage.removeItem("student");
         localStorage.removeItem("token");
         window.location.href = '/';
    }catch(err)
    {
        alert("Somthing wrong");
    }

}
module.exports={logout};