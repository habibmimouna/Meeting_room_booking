const express = require('express');
const router = express.Router();
const {createReservation,getAllReservations} = require('../controllers/reservationController');

// Routes for reservation-related operations
router.post('/reservations', createReservation);
router.get('/reservations', getAllReservations);
// Add more routes for reservation CRUD operations as needed

module.exports = router;
