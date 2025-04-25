const express=require('express');
const {loginStudent}=require('../controllers/loginController');
const router=express.Router();

router.post('/',loginStudent);
module.exports=router;
