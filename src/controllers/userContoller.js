const User = require("../models/user");

// Controller function for creating a new user
const createUser = async (req, res) => {
  try {
    console.log(req.body);

    // Check if the user already exists


    // Create a new user
    const newUser = new User({
      ...req.body
    });

    // Save the user to the database
    await newUser.save();

    // Return success response
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
