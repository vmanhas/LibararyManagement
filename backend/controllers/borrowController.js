const Borrow=require("../models/Borrow");
const Book=require("../models/Book");
const express=require("express");
const createBorrow = async (req, res) => {
    try {
    
      const { studentid, bookid} = req.body;
      const foundBook = await Book.findById(bookid);
  
      if (!foundBook) {
        return res.status(404).json({ message: "Book not found" });
      }
  
      if (foundBook.count < 1) {
        return res.status(400).json({ message: "Book count is less" });
      }
  
      const existing = await Borrow.findOne({ student: studentid, book: bookid, returnedAt: null });
      if (existing) {
    
        return res.status(404).json({ message: "Book already borrowed" });
      }
  
      const borrow = new Borrow({ student:studentid, book:bookid });
      await borrow.save();
  
      foundBook.count -= 1;
      await foundBook.save();
  
      return res.status(200).json({ message: "Book borrowed" });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
const getBorrow=async(req,res)=>{
    try{
        // const borrow=await Borrow.find();
        const borrow=await Borrow.find().populate('student').populate('book');
        res.send(borrow);

    }catch(err)
    {
        res.status(500).json({message:"Internal server error"});
    }
}
const returnBorrow=async(req,res)=>{
    try{
        const{studentid,bookid}=req.body;
        console.log(studentid);
        console.log(bookid);
        const book=await Book.findById(bookid);
        const borrow=await Borrow.findOne({student:studentid,book:bookid,returnedAt:null});
        if(!borrow)
        {
          return res.status(404).json({message:"Borrow record not found"});
        }
        borrow.returnedAt=new Date();
        await borrow.save();
        book.count+=1;
        await book.save();
        return res.status(200).json({message:"Book returned successfully"});

    }catch(err)
    {
        return res.status(404).json({message:`Error ${err.response}`})
    }
}

const deleteBorrow=async(req,res)=>{
  try{
    const {id}=req.params;
    const borrow=await Borrow.deleteMany({ student: id });
    res.status(200).json({ message: "Student and their borrows deleted successfully" });
  }catch(err)
  {
    return res.status(404).json({message:`Error ${err}`});
  }
}

module.exports={createBorrow,getBorrow,returnBorrow,deleteBorrow};