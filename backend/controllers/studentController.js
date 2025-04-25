const Student = require("../models/Student");

const express = require("express");

const createStudent = async (req, res) => {
  try {
    const existingstudent=await Student.findOne({enrollment: req.body.enrollment});
    if(existingstudent){
      return res.status(401).json({message:"Enrollment number already exists"});
    }
    const student = await Student.create(req.body);
    return res.status(201).json(student);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
const getStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
    console.log("ok");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedstudent = await Student.findByIdAndDelete(id);
    if (!deletedstudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedata = req.body;
    const updateitstudent = await Student.findByIdAndUpdate(id, updatedata, {
      new: true, // Return updated student
      runValidators: true, // Validate data before saving
    });
    console.log("Update successfull");
    if (!updateitstudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(updateitstudent);
  } catch (err) {
    res.status(400).json({ meessage: err.message });
  }
};
module.exports = { createStudent, getStudent, deleteStudent,updateStudent };
