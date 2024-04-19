const Reservation = require("../models/Reservation");
const User = require("../models/user");
const MeetingRoom = require("../models/meetingRoom")
const nodemailer = require("nodemailer");
const { getMeetingRoomById } = require("../controllers/meetingRoomController");

let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "habibmim15@gmail.com",
    pass: "wazh dojb qoxt ieot",
  },
});

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createReservation = async (req, res) => {
  try {
    const newReservation = await Reservation.create(req.body);
    if (newReservation) {
      const user = await getUserById(newReservation.user);
      
      const meetingRoom = await MeetingRoom.findById(newReservation.meetingRoom); 
      console.log(meetingRoom);
      
      let mailOptions = {
        from: "habibmim15@gmail.com",
        to: user.email, 
        subject: "Confirmed reservation", 
        text: `confirmation for reservation for room : ${meetingRoom.name}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log("Error occurred:", error);
        }
        console.log("Email sent:", info.response);
      });
    }
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReservation = async (req, res) => {
  console.log(req.body);
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.body.id,
      req.body,
      { new: true }
    );
    if (!updatedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json(updatedReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const deletedReservation = await Reservation.findByIdAndDelete(
      req.body.res._id
    );
    if (!deletedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createReservation,
  getAllReservations,
  updateReservation,
  deleteReservation,
};
