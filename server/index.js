const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
require("./src/server.js");

app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());
