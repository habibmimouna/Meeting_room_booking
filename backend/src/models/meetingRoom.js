const mongoose = require('mongoose');

const meetingRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  capacity: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  equipment: [{
    type: String,
    required: true
  }]
});

const MeetingRoom = mongoose.model('MeetingRoom', meetingRoomSchema);

module.exports = MeetingRoom;
