const User = require("../models/user");
const BodyParser =require("body-parser")

const createUser = async (req, res) => {
  try {
    console.log(req.body);

    const newUser = new User({
      ...req.body
      //name:req.body.name,
      //email:req.body.email,
     // phone:req.body.phone,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createUser,
};
