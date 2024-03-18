const MeetingRoom = require('../models/meetingRoom');

// Controller for meeting room-related operations

// Create a new meeting room
const createMeetingRoom = async (req, res) => {
  try {
    const newMeetingRoom = await MeetingRoom.create(req.body);
    res.status(201).json(newMeetingRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all meeting rooms
const getAllMeetingRooms = async (req, res) => {
  try {
    const meetingRooms = await MeetingRoom.find();
    res.json(meetingRooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createMeetingRoom,
  getAllMeetingRooms
  // Add other controller functions here
};
