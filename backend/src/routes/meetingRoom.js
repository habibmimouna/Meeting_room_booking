const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/auth");
const {
  createMeetingRoom,
  getAllMeetingRooms,
  updateMeetingRoom,
  getMeetingRoomById,
} = require("../controllers/meetingRoomController");

router.get("/meeting-rooms", getAllMeetingRooms);
router.get("/meeting-rooms/:id", getMeetingRoomById);

router.post("/meeting-rooms",authenticate ,createMeetingRoom);


router.put("/meeting-rooms", authenticate, updateMeetingRoom);

module.exports = router;
