const express = require("express");
const authenticate = require("../middleware/auth");
const router = express.Router();
const {
  createReservation,
  getAllReservations,
  updateReservation,
  deleteReservation,
} = require("../controllers/reservationController");

router.post("/reservations", authenticate, createReservation);
router.put("/reservations", updateReservation);
router.get("/reservations", getAllReservations);
router.delete("/reservations",deleteReservation)

module.exports = router;
