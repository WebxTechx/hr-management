const express = require("express");
const app = express();
require("dotenv/config");
require('./config/dbConnect.js');
const router = require('./routes/route.js')
const PORT = process.env.PORT;

app.use(router);
app.get("/", (req, res) => {
  try {
    res.send("Server Started");
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`server started successfully on: http://localhost:${PORT}`);
});

module.exports = app;
