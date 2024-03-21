const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const userRoute = require("./src/routes/auth");
const reservationRoute = require("./src/routes/reservation");
const meetingRoomRoute = require("./src/routes/meetingRoom");
const dotenv = require("dotenv");
const dbConfig = require("./src/config/database.config");
const mongoose = require("mongoose");
const { register, login } = require("./src/controllers/authContoller");
const app = express();

dotenv.config();
app.use(cors({origin: 'http://localhost:4200'}));

app.use(bodyParser.json());
app.use("/auth", userRoute);

app.use("/auth/register", register);
app.use("/auth/login", login);
app.use("/reservations", reservationRoute);
app.use("/meeting-Rooms", meetingRoomRoute);

app.use("/test", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(dbConfig.url, {})
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.listen(process.env.PORT, () => {
  console.log(
    ` server listening on port ${process.env.PORT} `,
    "\n",
    ` http://localhost:${process.env.PORT}/ `
  );
});
