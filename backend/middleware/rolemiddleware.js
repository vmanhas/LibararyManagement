const authorize = (roles) => (req, res, next) => {
    if (!roles.includes(req.student.role))
      return res.status(403).json({ message: "Forbidden" });
    next();
  };
  
  module.exports = {authorize};
  