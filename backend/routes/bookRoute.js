const express=require('express');
const { createBook, getBook,deleteBook,updateBook } = require('../controllers/bookController');
const router=express.Router();
router.post('/',createBook);
router.get('/',getBook);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook);
module.exports=router;