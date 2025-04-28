const express=require('express');
const app=express();
const router=express.Router();
const {createBorrow,getBorrow,returnBorrow,deleteBorrow}=require("../controllers/borrowController");
router.get('/',getBorrow);
router.post('/',createBorrow);
router.put('/',returnBorrow)
router.delete('/:id',deleteBorrow)
module.exports=router;