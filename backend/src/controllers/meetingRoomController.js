const MeetingRoom = require("../models/meetingRoom");

const createMeetingRoom = async (req, res) => {
  try {
    const newMeetingRoom = await MeetingRoom.create(req.body);
    res.status(201).json(newMeetingRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllMeetingRooms = async (req, res) => {
  try {
    const meetingRooms = await MeetingRoom.find();
    res.json(meetingRooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMeetingRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMeetingRoom = await MeetingRoom.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedMeetingRoom) {
      return res.status(404).json({ message: "Meeting room not found" });
    }
    res.json(updatedMeetingRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createMeetingRoom,
  getAllMeetingRooms,
  updateMeetingRoom,
};
