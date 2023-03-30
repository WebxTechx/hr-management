const express = require("express");
const {
  login,
  register,
} = require("../../controllers/users/user.controller.js");
const userRole = require("./userRole.router.js");
const verifyToken = require("../../middleware/verifyToken.middleware.js");
const router = express.Router();

// setting route for user type like admin, manager, general manager
router.use("/userRole", verifyToken, userRole);

// routes for user system like login, register, get all user, edit user, delete user
router.post("/", login);
router.post("/register", register);

module.exports = router;
