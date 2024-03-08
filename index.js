const express = require("express");
const userRoute = require('./src/routes/user');
const app = express();


PORT = 4200;

app.use(`/users`, userRoute);
app.use("/test", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(' server listening on port 4200 ', '\n', '  http://localhost:4200/ ');
});
