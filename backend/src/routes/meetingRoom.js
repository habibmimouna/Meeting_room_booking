const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");
const {
  createMeetingRoom,
  getAllMeetingRooms,
  updateMeetingRoom,
} = require("../controllers/meetingRoomController");

router.get("/meeting-rooms", getAllMeetingRooms);
router.post("/meeting-rooms", authenticate, createMeetingRoom);

router.put("/meeting-rooms", authenticate, updateMeetingRoom);

module.exports = router;
