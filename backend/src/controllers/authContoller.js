const User = require("../models/user");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const {password}=req.body;
    const hashedPassword= await bcrypt.hash(req.body.password,10)
    const user = new User({ ...req.body,
    password:hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({message:"user not found"});
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({message:"invalid password" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.send({ token:"Bearer "+ token });
  } catch (err) {
    res.status(400).send(err.message);
  }
};
const getAllUsers = async (req, res) => {
  try {
    const userList = await User.find();
    res.status(200).json(userList);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
};