const mongoose=require('mongoose');
const StudentSchema=new mongoose.Schema({
    enrollment:{
        type:String,
        required:true,
        unique:true,

    },
    email:{
        type:String,
        required:true,
    },
    name:{
        type: String,
        required:true,
    },
    phone:{
        type: String,
        required:true,
    },
    branch:{
        type: String,
        required:true,
    },
    semester:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        reuqired:true,
        
    },
    role:{
        type:String,
        enum:["admin","student"],
    }


});
const Student=mongoose.model("Student",StudentSchema);
module.exports=Student;