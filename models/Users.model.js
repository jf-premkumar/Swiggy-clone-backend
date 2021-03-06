const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_name: { type: String, required: true },
    phone_num: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dish", required: false}],
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
