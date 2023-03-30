const userRoleModel = require("../../models/users/userRole.model.js");
const createRole = async (req, res) => {
  try {
    const role = await userRoleModel({
      roleName: req.body.roleName.toLowerCase(),
    });

    role
      .save()
      .then((role) => {
        res.status(201).json({ data: role, message: "Role has been created!" });
      })
      .catch((error) => {
        res.status(400).json({ message: error.message });
      });
  } catch (error) {
    console.error("Error:---------------------------------");
    console.error(error);
    console.error("Error:---------------------------------");
  }
};

const editRole = async (req, res) => {
  try {
    
  } catch (error) {
    console.error("Error:---------------------------------");
    console.error(error);
    console.error("Error:---------------------------------");
  }
};

module.exports = { createRole, editRole };
