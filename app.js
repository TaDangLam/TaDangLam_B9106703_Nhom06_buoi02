const express = require('express');
const cors = require('express');
const app = express("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({message: "Welcome to contact book application."}));

module.exports = app;
