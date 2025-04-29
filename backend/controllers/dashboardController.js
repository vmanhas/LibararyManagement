const Borrow=require("../models/Borrow");
const Student=require("../models/Student");
const Book=require("../models/Book");

const getdashboard=async(req,res)=>{
    try{
        const student=await Student.countDocuments();
        const book=await Book.countDocuments();
        const borrow=await Borrow.countDocuments();
        return res.json({student,book,borrow});

    }catch(err)
    {
        console.log(err);
    }

}
module.exports={getdashboard};
