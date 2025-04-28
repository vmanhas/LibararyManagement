const Book = require("../models/Book");
const express=require("express");

const createBook=async(req,res)=>{
    try{
        
        const book = await Book.create(req.body);
        res.status(201).json(book);

    }catch(err){
        res.status(400).json({message:err.message});

    }
}
const getBook = async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books
        res.status(200).json(books);
    } catch (err) {
        
        res.status(400).json({ message: err.message });
    }
};

const updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};


module.exports = { createBook, getBook, updateBook, deleteBook };
