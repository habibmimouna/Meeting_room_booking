const express = require('express');
const router = express.Router();
const {createMeetingRoom,getAllMeetingRooms} = require('../controllers/meetingRoomController');
const authenticate = require('../middleware/auth');


router.post('/meeting-rooms', authenticate,createMeetingRoom);
router.get('/meeting-rooms', getAllMeetingRooms);


module.exports = router;
