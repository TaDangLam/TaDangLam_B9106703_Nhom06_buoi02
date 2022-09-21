const express = require('express');
const cors = require('express');
const app = express("cors");
const contactsRouter = require("./app/routes/contact.routes");

app.use(cors());
app.use(express.json());


app.use("/api/contacts", contactsRouter);

module.exports = app;
