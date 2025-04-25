const express=require('express');
const { createStudent, getStudent,deleteStudent,updateStudent } = require('../controllers/studentController');
const router=express.Router();
router.post('/',createStudent);
router.get('/',getStudent);
router.put('/:id',updateStudent);
router.delete('/:id',deleteStudent);
module.exports=router;