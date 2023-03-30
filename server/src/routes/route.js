const express = require("express");
const cors = require("cors");
const router = express.Router();
const userRoute = require("./users/user.router.js");

router.use(express.json());


router.use(cors());
router.use("/user", userRoute);

module.exports = router;
