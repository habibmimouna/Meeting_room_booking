const MeetingRoom = require("../models/meetingRoom");
const Reservation = require("../models/Reservation");

const createMeetingRoom = async (req, res) => {
  console.log(req.body);
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

const getMeetingRoomById = async (req, res) => {
  const { id } = req.params;
  try {
    const meetingRoom = await MeetingRoom.findById(id);
    if (!meetingRoom) {
      return res.status(404).json({ message: "Meeting room not found" });
    }
    res.json(meetingRoom);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
const getAvailableHoursForDay = async (req, res) => {
  const { id,day } = req.params;
  

  try {
    // Find reservations for the specified room and day
    console.log(day, id);
    const reservations = await Reservation.find({
      meetingRoom: id,
      day: day,
    });
    console.log(reservations);
    // Assume your meeting rooms have fixed hours, like 9:00 AM to 5:00 PM
    const totalHoursInDay = [
      "8-9",
      "9-10",
      "10-11",
      "11-12",
      "12-13",
      "13-14",
      "14-15",
      "15-16",
      "16-17",
      "17-18",
    ];

    // Extract all reserved hours into a single array
    const reservedHours = reservations.flatMap(
      (reservation) => reservation.reservedHours
    );
    console.log(reservedHours);

    // Filter out reserved hours
    let availableHours = totalHoursInDay.filter(
      (hour) => !reservedHours.includes(hour)
    );

    res.json({ availableHours });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  createMeetingRoom,
  getAllMeetingRooms,
  getMeetingRoomById,
  updateMeetingRoom,
  getAvailableHoursForDay,
};
