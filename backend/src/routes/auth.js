const express = require("express");

const { register, login, getAllUsers } = require("../controllers/authContoller");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getAll",getAllUsers);
router.get("/", async (req, res) => {
  if (true) {
    console.log("no users yet .. sorry!");
    res.status(500).json({ success: false });
  }
});

module.exports = router;
