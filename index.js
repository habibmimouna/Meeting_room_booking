const express = require("express");
const bodyParser = require('body-parser');
const userRoute = require("./src/routes/user");
const dbConfig = require("./src/config/database.config");
const mongoose = require("mongoose");
const { createUser } = require("./src/controllers/userContoller");
const app = express();

PORT = 4200;

app.use(bodyParser.json());
app.use(`/users`, userRoute);
app.post('/users/reg',createUser)
app.use("/test", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(dbConfig.url, {
    
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.listen(PORT, () => {
  console.log(
    " server listening on port 4200 ",
    "\n",
    "  http://localhost:4200/ "
  );
});
