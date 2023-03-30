const jwt = require("jsonwebtoken");
const userModel = require("../models/users/user.model");

const verifyToken = async (req, res, next) => {
  if (!req.headers.authorization)
    res.status(400).json({ message: "Token not found" });

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodeToken = jwt.decode(token, process.env.JWT_SCERET);
    const user = await userModel.findById(decodeToken.userId);
    
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    };

    if (user.role != "admin") {
      res.status(401).json({ message: "You are not authorized." });
      return;
    };

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = verifyToken;
