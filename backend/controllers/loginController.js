const Student = require("../models/Student");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginStudent = async (req, res) => {
  try {
    const { enrollment, password } = req.body;
    const student = await Student.findOne({ enrollment });
    if (!student) {
      return res
        .status(401)
        .json({ message: "Invalid credential student not exist" });
    }
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password mismatch" });
    }
    const token = jwt.sign(
      {
        studentid: student._id,
        role: student.role,
        studentname: student.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({
      message: "Login successful",
      token,
      student: {
        enrollment: student.enrollment,
        name: student.name,
        role: student.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { loginStudent };
