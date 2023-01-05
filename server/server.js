require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./db');

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!"})
});

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});
