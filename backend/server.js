const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4444;

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("mongoDB con estabilished");
})

const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`The server is runnig on port: ${port}`);
});