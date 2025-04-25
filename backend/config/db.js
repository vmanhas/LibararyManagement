const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Connectdb=async()=>{
   try{
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,

    });
    console.log('MondoDB connected succesfully');

   }catch(err){
    console.error('MongoDB connection failes',err);
    process.exit(1);

   }
}
module.exports=Connectdb;

