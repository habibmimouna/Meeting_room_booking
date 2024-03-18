const Reservation = require('../models/Reservation');

// Controller for reservation-related operations

// Create a new reservation
const createReservation = async (req, res) => {
  try {
    const newReservation = await Reservation.create(req.body);
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all reservations
const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Other controller functions for reservation CRUD operations

module.exports = {
  createReservation,
  getAllReservations
  // Add other controller functions here
};
