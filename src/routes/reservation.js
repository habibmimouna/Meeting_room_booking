const express = require('express');
const router = express.Router();
const {createReservation,getAllReservations} = require('../controllers/reservationController');
const authenticate = require('../middleware/auth');


router.post('/reservations', authenticate,createReservation);
router.get('/reservations', getAllReservations);


module.exports = router;
