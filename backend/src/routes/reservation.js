const express = require("express");
const authenticate = require("../middleware/auth");
const router = express.Router();
const {
  createReservation,
  getAllReservations,
  updateReservation,
} = require("../controllers/reservationController");

router.post("/reservations", authenticate, createReservation);
router.put("/reservation", authenticate, updateReservation);
router.get("/reservations", getAllReservations);

module.exports = router;
