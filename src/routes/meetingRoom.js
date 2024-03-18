const express = require('express');
const router = express.Router();
const {createMeetingRoom,getAllMeetingRooms} = require('../controllers/meetingRoomController');

// Routes for meeting room-related operations
router.post('/meeting-rooms', createMeetingRoom);
router.get('/meeting-rooms', getAllMeetingRooms);
// Add more routes for meeting room CRUD operations as needed

module.exports = router;
