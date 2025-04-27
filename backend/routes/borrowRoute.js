const express=require('express');
const app=express();
const router=express.Router();
const {createBorrow,getBorrow,returnBorrow}=require("../controllers/borrowController");
router.get('/',getBorrow);
router.post('/',createBorrow);
router.put('/',returnBorrow)

module.exports=router;