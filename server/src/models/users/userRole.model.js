const mongoose = require("mongoose");

const userRoleSchema = new mongoose.Schema(
  {
    roleName: {
      type: String,
      required: true,
      unique: true
    },
  },
  { timestamps: true },
  { collection: 'userRole' }
);

module.exports = mongoose.model("userRole", userRoleSchema);
