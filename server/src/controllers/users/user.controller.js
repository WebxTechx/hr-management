const userModel = require("../../models/users/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const login = async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email.toLowerCase(),
    });

    if (!user) {
      res.status(401).json({ message: "Invalid email or password" })
      return;
    };

    const passwordCheck = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordCheck){
      res.status(401).json({ message: "Invalid email or password" });
      return;
    }

    const { _id, name, email, role } = user;
    const userProfile = {
      id: _id,
      name,
      email: email.toLowerCase(),
      role,
    };

    const token = jwt.sign({ userId: userProfile.id }, process.env.JWT_SCERET, {
      expiresIn: "2h",
    });

    res.status(200).json({
      data: userProfile,
      token: token,
      message: "Logged in Successfully",
    });
  } catch (error) {
    console.error('Error:---------------------------------');
        console.error(error);
        console.error('Error:---------------------------------');
  }
};

const register = async (req, res) => {
  const { name, email, role, password } = req.body;

  const hashedPass = await bcrypt.hash(password, saltRounds);

  const user = await userModel({
    name: name,
    email: email.toLowerCase(),
    role: role.toLowerCase(),
    password: hashedPass,
  });

  try {
    user
      .save()
      .then((item) => {
        res
          .status(201)
          .json({ message: "User Created Successfully", data: item });
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } catch (error) {
    console.error('Error:---------------------------------');
        console.error(error);
        console.error('Error:---------------------------------');
  }
};

module.exports = { login, register };
